#!/bin/bash

# APW Website Nginx Deployment Script
# Deploys optimized nginx configuration for Next.js static export
# Usage: ./deploy-nginx.sh

SERVER="admin@147.139.191.16"
NGINX_CONFIG_FILE="nginx.conf"

echo "🚀 APW Website Nginx Deployment"
echo "=============================="

# Build the application first
echo "🔨 Building application..."
cd ..
if [ -f "scripts/build-multilang.js" ]; then
    echo "📦 Running multi-language build script..."
    node scripts/build-multilang.js
else
    echo "📦 Running standard Next.js build..."
    npm run build
fi

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again"
    exit 1
fi
echo "✅ Build completed successfully"

# Go back to nginx-config directory
cd nginx-config

# Check if server is reachable
echo "🔍 Checking server connectivity..."
if ! ssh -o ConnectTimeout=10 $SERVER "echo 'Connected to server'" >/dev/null 2>&1; then
    echo "❌ Cannot connect to server $SERVER"
    echo "Please check your SSH connection and try again"
    exit 1
fi
echo "✅ Server connection established"

# Backup current configuration
echo ""
echo "💾 Backing up current Nginx configuration..."
ssh $SERVER "
    # Create backup directory with timestamp
    BACKUP_DIR=\"/etc/nginx/backup/\$(date +%Y%m%d_%H%M%S)\"
    sudo mkdir -p \$BACKUP_DIR
    
    # Backup current configuration
    sudo cp /etc/nginx/sites-available/anugerahpancawisesa.com \$BACKUP_DIR/ 2>/dev/null || true
    
    echo \"✅ Configuration backed up to \$BACKUP_DIR\"
"

# Upload nginx configuration
echo ""
echo "📤 Uploading nginx configuration..."
scp $NGINX_CONFIG_FILE $SERVER:~/

# Apply nginx configuration
echo ""
echo "⚙️ Applying nginx configuration..."
ssh $SERVER "
    sudo cp ~/$NGINX_CONFIG_FILE /etc/nginx/sites-available/anugerahpancawisesa.com
    sudo nginx -t
    if [ \$? -eq 0 ]; then
        sudo systemctl reload nginx
        echo \"✅ Nginx configuration applied and reloaded\"
    else
        echo \"❌ Nginx configuration test failed\"
        exit 1
    fi
"

# Deploy application files
echo ""
echo "📤 Deploying application files..."
ssh $SERVER "
    # Create backup of current deployment
    if [ -d '/var/www/anugerahpancawisesa.com' ]; then
        BACKUP_DIR=\"/var/www/backups/anugerahpancawisesa-\$(date +%Y%m%d_%H%M%S)\"
        sudo mkdir -p /var/www/backups
        sudo cp -r /var/www/anugerahpancawisesa.com \$BACKUP_DIR
        echo \"✅ Backup created at \$BACKUP_DIR\"
    fi
    
    # Create deployment directory
    sudo mkdir -p /var/www/anugerahpancawisesa.com
    sudo chown -R admin:admin /var/www/anugerahpancawisesa.com
"

# Upload build files
echo "📤 Uploading build files..."
rsync -avz --delete ../out/ $SERVER:/var/www/anugerahpancawisesa.com/
if [ $? -ne 0 ]; then
    echo "❌ Upload failed"
    exit 1
fi

# Set proper permissions
echo "🔐 Setting proper permissions..."
ssh $SERVER "
    sudo chown -R www-data:www-data /var/www/anugerahpancawisesa.com
    sudo chmod -R 755 /var/www/anugerahpancawisesa.com
    echo \"✅ Permissions set correctly\"
"

# Test website
echo ""
echo "🧪 Testing website..."
echo "Main page redirect test:"
curl -s -I https://anugerahpancawisesa.com/ | head -3
echo ""
echo "English route test:"
curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" https://anugerahpancawisesa.com/en/
echo "Indonesian route test:"
curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" https://anugerahpancawisesa.com/id/
echo "Product page test:"
curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" https://anugerahpancawisesa.com/en/products/starlet/
echo "Assets test:"
curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" https://anugerahpancawisesa.com/assets/products/logo/products-starlet-logo.webp

echo ""
echo "🎉 APW Website nginx deployment completed successfully!"
echo ""
echo "📋 What was deployed:"
echo "   ✅ Next.js application build with multi-language support"
echo "   ✅ Product logos and updated components"
echo "   ✅ Auto-redirect from main domain to /en/"
echo "   ✅ Multi-language routing (/en/ and /id/)"
echo "   ✅ Product detail pages with logos"
echo "   ✅ Optimized assets (WebP images)"
echo "   ✅ CSS cache busting headers"
echo "   ✅ Security headers"
echo "   ✅ Static assets optimization"
echo ""
echo "📋 Your optimized website:"
echo "   🌐 Main: https://anugerahpancawisesa.com/ (redirects to /en/)"
echo "   🌐 English: https://anugerahpancawisesa.com/en/"
echo "   🌐 Indonesian: https://anugerahpancawisesa.com/id/"
echo "   🌐 Products: https://anugerahpancawisesa.com/en/products/"
echo "   🌐 Starlet: https://anugerahpancawisesa.com/en/products/starlet/"
echo "   🌐 StarArc: https://anugerahpancawisesa.com/en/products/stararc/"
echo "   🌐 AlloyStar: https://anugerahpancawisesa.com/en/products/allostar/"
echo "   🌐 TSV: https://anugerahpancawisesa.com/en/products/tsv/"
echo ""
echo "📋 Management commands:"
echo "   • Test config: ssh $SERVER 'sudo nginx -t'"
echo "   • Reload nginx: ssh $SERVER 'sudo systemctl reload nginx'"
echo "   • View logs: ssh $SERVER 'sudo tail -f /var/log/nginx/error.log'"
