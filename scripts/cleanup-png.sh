#!/bin/bash

# Script to remove original PNG files after WebP conversion
# Usage: ./scripts/cleanup-png.sh

echo "🧹 Cleaning up original PNG files after WebP conversion..."

# Base directory for gallery images
GALLERY_DIR="src/docs/products/gallery"

# Function to remove PNG files
remove_png() {
    local png_file="$1"
    
    if [ -f "$png_file" ]; then
        echo "Removing: $png_file"
        rm "$png_file"
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully removed: $png_file"
        else
            echo "❌ Failed to remove: $png_file"
        fi
    else
        echo "⚠️  File not found: $png_file"
    fi
}

# Remove Starlet PNG files
echo "🗑️  Removing Starlet PNG files..."
for i in {1..5}; do
    remove_png "$GALLERY_DIR/starlet/$i.png"
done

# Remove StarArc PNG files
echo "🗑️  Removing StarArc PNG files..."
for i in {1..6}; do
    remove_png "$GALLERY_DIR/stararc/$i.png"
done

# Remove AlloyStar PNG files
echo "🗑️  Removing AlloyStar PNG files..."
for i in {1..10}; do
    remove_png "$GALLERY_DIR/allostar/$i.png"
done

echo "🎉 Cleanup completed!"
echo "📊 Summary:"
echo "   - Starlet: 5 PNG files removed"
echo "   - StarArc: 6 PNG files removed" 
echo "   - AlloyStar: 10 PNG files removed"
echo "   - Total: 21 PNG files removed"

echo ""
echo "💡 Benefits:"
echo "   - Reduced storage space"
echo "   - Faster build times"
echo "   - Cleaner repository"
