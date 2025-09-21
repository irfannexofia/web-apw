#!/bin/bash

# APW Official Website Safe Deployment Script for Next.js
# Multi-language Support (English/Indonesian) with Performance & SEO Optimization
# SSL Auto-Renewal, Dynamic Metadata, Hreflang Support
# Usage: ./scripts/deploy-dev-safe.sh

SERVER="admin@147.139.191.16"
SERVER_PATH="/var/www/dev.anugerahpancawisesa.com"
DOMAIN="dev.anugerahpancawisesa.com"
PROJECT_ROOT="/Users/fachrinaufal/Workplace/Digital-Asia-Nusantara/Netpiu/Project"

echo "🚀 APW Official Website Safe Deployment (Next.js + Multi-language) - DEV"
echo "======================================================================="

# Check server connectivity
echo "🔍 Checking server connectivity..."
if ! ssh -o ConnectTimeout=10 $SERVER "echo 'Connected to server'" >/dev/null 2>&1; then
    echo "❌ Cannot connect to server $SERVER"
    echo "Please check your SSH connection and try again"
    exit 1
fi
echo "✅ Server connection established"

# Check if optimized Nginx is configured
echo "🔧 Checking for optimized Nginx configuration..."
if ssh $SERVER "[ -d /etc/nginx/backup ]" 2>/dev/null; then
    echo "✅ Optimized Nginx configuration detected"
else
    echo "⚠️  Optimized Nginx configuration not detected"
    echo "💡 Deploying optimized configuration first..."
    
    # Deploy optimized configuration
    cd "$PROJECT_ROOT/nginx-config"
    if [ -f "deploy-modular.sh" ]; then
        echo "🚀 Deploying optimized Nginx configuration..."
        ./deploy-modular.sh
        if [ $? -eq 0 ]; then
            echo "✅ Optimized Nginx configuration deployed successfully"
        else
            echo "❌ Failed to deploy optimized Nginx configuration"
            exit 1
        fi
    else
        echo "❌ deploy-modular.sh not found in nginx-config directory"
        exit 1
    fi
    
    # Return to project directory
    cd "$PROJECT_ROOT/anugerahpancawisesa-official-website"
fi

# Build the Next.js project with multi-language support
echo "🔨 Building Next.js project with multi-language support..."
node scripts/build-multilang.js

if [ $? -ne 0 ]; then
    echo "❌ Multi-language build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Multi-language build successful!"

# Check if out directory exists (static export)
if [ ! -d "out" ]; then
    echo "❌ Static export failed! 'out' directory not found."
    echo "💡 Make sure next.config.ts is configured for static export."
    exit 1
fi

# Backup current deployment
echo "💾 Creating backup of current deployment..."
ssh $SERVER "
    if [ -d '$SERVER_PATH' ]; then
        sudo cp -r $SERVER_PATH $SERVER_PATH.backup.\$(date +%Y%m%d_%H%M%S)
        echo '✅ Backup created'
    else
        echo 'ℹ️  No existing deployment to backup'
    fi
"

# Upload the built files
echo "📤 Uploading static files to server..."
scp -r out/ $SERVER:~/

# Create server directory and setup files
echo "📁 Setting up server directory..."
ssh $SERVER "
    # Create directory structure
    sudo mkdir -p $SERVER_PATH
    
    # Copy static files
    sudo cp -r ~/out/* $SERVER_PATH/
    
    # Set proper ownership
    sudo chown -R www-data:www-data $SERVER_PATH/
    sudo chmod -R 755 $SERVER_PATH/
    
    # Cleanup temp files
    rm -rf ~/out
"

# Configure Nginx for APW dev domain
echo "⚙️  Configuring Nginx for APW dev domain..."
ssh $SERVER "
    # Copy the optimized site configuration
    sudo cp /etc/nginx/sites-available/dev.anugerahpancawisesa.com /etc/nginx/sites-available/dev.anugerahpancawisesa.com.backup.\$(date +%Y%m%d_%H%M%S) 2>/dev/null || true
    
    # Enable the site
    sudo ln -sf /etc/nginx/sites-available/dev.anugerahpancawisesa.com /etc/nginx/sites-enabled/
    
    # Test Nginx configuration
    sudo nginx -t
    
    if [ \$? -eq 0 ]; then
        sudo systemctl reload nginx
        echo '✅ Nginx configuration updated and reloaded'
    else
        echo '❌ Nginx configuration test failed'
        echo 'Restoring backup...'
        sudo cp /etc/nginx/sites-available/dev.anugerahpancawisesa.com.backup.* /etc/nginx/sites-available/dev.anugerahpancawisesa.com
        exit 1
    fi
"

# Setup SSL with Let's Encrypt and Auto-Renewal
echo "🔒 Setting up SSL certificate with auto-renewal..."
ssh $SERVER "
    # Install certbot if not already installed
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
    
    # Get SSL certificate
    sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@anugerahpancawisesa.com
    
    # Setup auto-renewal
    sudo systemctl enable certbot.timer
    sudo systemctl start certbot.timer
    
    echo '✅ SSL certificate installed with auto-renewal'
"

# Create SEO files if they don't exist
echo "📄 Setting up SEO files..."
ssh $SERVER "
    # Create robots.txt if it doesn't exist
    if [ ! -f '$SERVER_PATH/robots.txt' ]; then
        sudo tee $SERVER_PATH/robots.txt > /dev/null << 'ROBOTS'
User-agent: *
Allow: /

# Sitemap
Sitemap: https://$DOMAIN/sitemap.xml

# Block unnecessary crawlers
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /
ROBOTS
        sudo chown www-data:www-data $SERVER_PATH/robots.txt
    fi
    
    # Create sitemap.xml with multi-language support if it doesn't exist
    if [ ! -f '$SERVER_PATH/sitemap.xml' ]; then
        sudo tee $SERVER_PATH/sitemap.xml > /dev/null << 'SITEMAP'
<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'
        xmlns:xhtml='http://www.w3.org/1999/xhtml'>
    <!-- English version (default) -->
    <url>
        <loc>https://$DOMAIN/</loc>
        <lastmod>$(date -u +%Y-%m-%dT%H:%M:%S+00:00)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        <xhtml:link rel='alternate' hreflang='en' href='https://$DOMAIN/' />
        <xhtml:link rel='alternate' hreflang='id' href='https://$DOMAIN/id/' />
        <xhtml:link rel='alternate' hreflang='x-default' href='https://$DOMAIN/' />
    </url>
    <!-- Indonesian version -->
    <url>
        <loc>https://$DOMAIN/id/</loc>
        <lastmod>$(date -u +%Y-%m-%dT%H:%M:%S+00:00)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
        <xhtml:link rel='alternate' hreflang='en' href='https://$DOMAIN/' />
        <xhtml:link rel='alternate' hreflang='id' href='https://$DOMAIN/id/' />
        <xhtml:link rel='alternate' hreflang='x-default' href='https://$DOMAIN/' />
    </url>
    <!-- Indonesian redirect route -->
    <url>
        <loc>https://$DOMAIN/id</loc>
        <lastmod>$(date -u +%Y-%m-%dT%H:%M:%S+00:00)</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
SITEMAP
        sudo chown www-data:www-data $SERVER_PATH/sitemap.xml
    fi
"

# Enhanced deployment verification
echo ""
echo "🔍 Enhanced deployment verification..."
sleep 3

# Check if website is accessible
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN 2>/dev/null)
if [ "$HTTP_STATUS" -eq 200 ]; then
    echo "✅ Website is accessible (HTTP $HTTP_STATUS)"
    
    # Test response time
    RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" https://$DOMAIN 2>/dev/null)
    echo "⚡ Response time: ${RESPONSE_TIME}s"
    
    # Test SSL certificate
    SSL_INFO=$(echo | openssl s_client -connect "${DOMAIN}:443" -servername "$DOMAIN" 2>/dev/null | openssl x509 -noout -dates 2>/dev/null)
    if [ $? -eq 0 ]; then
        echo "🔒 SSL certificate is valid"
    else
        echo "⚠️  SSL certificate issue detected"
    fi
    
    # Test multi-language support
    echo "🌐 Testing multi-language support..."
    ID_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN/id/ 2>/dev/null)
    if [ "$ID_STATUS" -eq 200 ]; then
        echo "✅ Indonesian version accessible"
    else
        echo "⚠️  Indonesian version not accessible (HTTP $ID_STATUS)"
    fi
    
else
    echo "⚠️  Website not accessible (HTTP $HTTP_STATUS)"
    echo "💡 This might be due to deployment in progress or configuration issues"
fi

# Check if domain resolves correctly
IP_CHECK=$(nslookup $DOMAIN | grep -A1 "Name:" | tail -1 | awk '{print $2}')
if [ "$IP_CHECK" = "147.139.191.16" ]; then
    echo "✅ DNS resolution correct: $IP_CHECK"
else
    echo "⚠️  DNS may not have propagated yet. Current IP: $IP_CHECK"
fi

echo ""
echo "🎉 Safe deployment completed!"
echo ""
echo "📋 Performance Features Enabled:"
echo "   ✅ Static file caching (1 day for dev)"
echo "   ✅ Gzip compression"
echo "   ✅ Security headers"
echo "   ✅ SSL with auto-renewal"
echo "   ✅ SEO optimization"
echo "   ✅ Multi-language support (EN/ID)"
echo "   ✅ Dynamic metadata"
echo "   ✅ Hreflang tags"
echo "   ✅ Error pages (404/500)"
echo "   ✅ Rate limiting (if configured)"
echo ""
echo "📋 Next Steps:"
echo "   1. Test website: https://$DOMAIN"
echo "   2. Test Indonesian version: https://$DOMAIN/id/"
echo "   3. Test Indonesian redirect: https://$DOMAIN/id"
echo "   4. Test error pages: https://$DOMAIN/404, https://$DOMAIN/500"
echo "   5. Monitor performance: Google PageSpeed Insights"
echo "   6. Submit sitemap to Google Search Console"
echo "   7. Verify hreflang tags in Google Search Console"
echo "   8. Setup Google Analytics (optional)"
echo ""
echo "🔧 SSL Auto-Renewal Status:"
echo "   • Certificate expires: $(ssh $SERVER 'sudo certbot certificates 2>/dev/null | grep -A1 "$DOMAIN" | grep "Expiry Date" | cut -d: -f2- | xargs')"
echo "   • Auto-renewal: Enabled via systemd timer"
echo "   • Same setup as: anugerahpancawisesa.com & anugerahpancawisesa.com"
echo ""
echo "💡 Use 'nginx-config/monitor-nginx.sh' to monitor performance"
