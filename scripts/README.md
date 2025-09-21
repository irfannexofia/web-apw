# APW Official Website Deployment Scripts

Script deployment untuk website APW Official (Next.js) dari local ke server production.

## 🎯 Overview

Project APW Official telah berhasil dipindahkan dari Svelte ke Next.js dengan setup yang lebih robust menggunakan Nginx dan SSL.

## 📁 Scripts

### 1. `./deploy-dev.sh` - **STANDARD DEPLOYMENT SCRIPT**

Script standar untuk mendeploy project Next.js ke server.

**Usage:**

```bash
./scripts/deploy-dev.sh
```

**Features:**

- ✅ Build Next.js dengan multi-language support
- ✅ Deploy static files ke server
- ✅ Setup Nginx configuration
- ✅ Setup SSL certificate dengan auto-renewal
- ✅ Setup SEO files (robots.txt, sitemap.xml)
- ✅ Verifikasi deployment

### 2. `./deploy-dev-safe.sh` - **SAFE DEPLOYMENT SCRIPT (RECOMMENDED)**

Script aman untuk mendeploy dengan backup dan verifikasi lengkap.

**Usage:**

```bash
./scripts/deploy-dev-safe.sh
```

**Features:**

- ✅ Semua fitur dari deploy-dev.sh
- ✅ Backup otomatis sebelum deployment
- ✅ Deteksi konfigurasi Nginx yang dioptimalkan
- ✅ Verifikasi deployment yang ditingkatkan
- ✅ Testing SSL certificate
- ✅ Monitoring response time
- ✅ Rollback otomatis jika ada masalah

### 3. `./deploy-dev-simple.sh` - **SIMPLE DEPLOYMENT SCRIPT**

Script sederhana untuk deployment cepat.

**Usage:**

```bash
./scripts/deploy-dev-simple.sh
```

## 🚀 Quick Start

### Deploy Project (Recommended):

```bash
# Safe deployment dengan backup dan verifikasi lengkap
./scripts/deploy-dev-safe.sh
```

### Deploy Project (Standard):

```bash
# Standard deployment
./scripts/deploy-dev.sh
```

### Deploy Project (Simple):

```bash
# Simple deployment
./scripts/deploy-dev-simple.sh
```

## ⚙️ Configuration

- **Server**: `admin@147.139.191.16`
- **Server Path**: `/var/www/dev.anugerahpancawisesa.com`
- **Web Server**: Nginx (Static files)
- **SSL**: Let's Encrypt (Auto-renewal)
- **Website**: https://dev.anugerahpancawisesa.com
- **Framework**: Next.js dengan static export
- **Multi-language**: English/Indonesian

## 📋 Deployment Process

### Safe Deployment Process:

1. **Check connectivity** - Verifikasi koneksi ke server
2. **Check Nginx config** - Deteksi konfigurasi Nginx yang dioptimalkan
3. **Build project** - Build Next.js dengan multi-language support
4. **Backup current** - Backup deployment saat ini
5. **Upload files** - Upload static files ke server
6. **Setup Nginx** - Konfigurasi Nginx untuk domain
7. **Setup SSL** - Setup SSL certificate dengan auto-renewal
8. **Setup SEO** - Setup robots.txt dan sitemap.xml
9. **Verify deployment** - Verifikasi deployment dengan testing lengkap

### Standard Deployment Process:

1. **Build project** - Build Next.js dengan multi-language support
2. **Upload files** - Upload static files ke server
3. **Setup Nginx** - Konfigurasi Nginx untuk domain
4. **Setup SSL** - Setup SSL certificate dengan auto-renewal
5. **Setup SEO** - Setup robots.txt dan sitemap.xml
6. **Verify deployment** - Verifikasi deployment

## 🔧 Troubleshooting

### 1. Build Failed

```bash
# Clear Next.js cache
rm -rf .next out

# Rebuild
npm run build:multilang
```

### 2. Website Not Accessible

```bash
# Check status
ssh admin@147.139.191.16 'sudo systemctl status nginx'

# Check logs
ssh admin@147.139.191.16 'sudo tail -f /var/log/nginx/error.log'

# Redeploy
./scripts/deploy-dev-safe.sh
```

### 3. SSL Issues

```bash
# Check certificate status
ssh admin@147.139.191.16 'sudo certbot certificates'

# Test Nginx config
ssh admin@147.139.191.16 'sudo nginx -t'

# Reload Nginx
ssh admin@147.139.191.16 'sudo systemctl reload nginx'
```

### 4. Multi-language Issues

```bash
# Check if build-multilang.js exists
ls -la scripts/build-multilang.js

# Run build manually
node scripts/build-multilang.js

# Check out directory
ls -la out/
```

## 🎯 Best Practices

- ✅ Selalu gunakan `deploy-dev-safe.sh` untuk deployment production
- ✅ Test di local dulu dengan `npm run preview`
- ✅ Monitor deployment dengan `nginx-config/monitor-nginx.sh`
- ✅ Backup otomatis sebelum setiap deployment
- ✅ Verifikasi deployment setelah selesai

## 📊 Performance Features

- **Static Export**: Ultra-fast loading dengan Next.js static export
- **Multi-language**: Support English/Indonesian dengan hreflang
- **Caching**: 1 day cache untuk dev environment
- **Compression**: Gzip enabled
- **Security**: XSS, CSRF protection headers
- **SEO**: Complete metadata dan sitemap
- **SSL**: Let's Encrypt dengan auto-renewal

## 🔍 Monitoring

### Health Check:

```bash
# Check website status
curl -I https://dev.anugerahpancawisesa.com

# Check SSL certificate
openssl s_client -connect dev.anugerahpancawisesa.com:443 -servername dev.anugerahpancawisesa.com

# Monitor performance
cd ../../nginx-config && ./monitor-nginx.sh
```

### Log Files:

```bash
# Access logs
ssh admin@147.139.191.16 'sudo tail -f /var/log/nginx/dev.anugerahpancawisesa.com.access.log'

# Error logs
ssh admin@147.139.191.16 'sudo tail -f /var/log/nginx/dev.anugerahpancawisesa.com.error.log'
```

## 🚀 Next Steps

1. **Deploy**: Run `./scripts/deploy-dev-safe.sh`
2. **Test**: Verify website functionality
3. **Monitor**: Use monitoring scripts
4. **Optimize**: Review performance metrics
5. **Maintain**: Regular updates dan monitoring

## 📞 Support

Jika mengalami masalah:

1. Check troubleshooting section di atas
2. Review Nginx error logs
3. Run monitoring script
4. Check server resources
5. Contact system administrator

## 🔗 Related Projects

Deployment setup ini mengikuti pattern yang sama dengan:

- `anugerahpancawisesa-official-website`
- `netpiu-official-website`
- `anugerahpancawisesa.com` (Svelte version)
