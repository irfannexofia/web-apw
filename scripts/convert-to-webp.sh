#!/bin/bash

# Script to convert PNG images to WebP format for optimization
# Usage: ./scripts/convert-to-webp.sh

echo "🔄 Starting PNG to WebP conversion for product gallery images..."

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo "❌ ImageMagick is not installed. Please install it first:"
    echo "   brew install imagemagick"
    exit 1
fi

# Base directory for gallery images
GALLERY_DIR="src/docs/products/gallery"

# Function to convert PNG to WebP
convert_to_webp() {
    local input_file="$1"
    local output_file="${input_file%.png}.webp"
    
    if [ -f "$input_file" ]; then
        echo "Converting: $input_file -> $output_file"
        magick "$input_file" -quality 85 -define webp:lossless=false "$output_file"
        
        # Check if conversion was successful
        if [ $? -eq 0 ]; then
            echo "✅ Successfully converted: $output_file"
            # Optionally remove original PNG file (uncomment if desired)
            # rm "$input_file"
        else
            echo "❌ Failed to convert: $input_file"
        fi
    else
        echo "⚠️  File not found: $input_file"
    fi
}

# Convert Starlet gallery images
echo "📸 Converting Starlet gallery images..."
for i in {1..5}; do
    convert_to_webp "$GALLERY_DIR/starlet/$i.png"
done

# Convert StarArc gallery images
echo "📸 Converting StarArc gallery images..."
for i in {1..6}; do
    convert_to_webp "$GALLERY_DIR/stararc/$i.png"
done

# Convert AlloyStar gallery images
echo "📸 Converting AlloyStar gallery images..."
for i in {1..10}; do
    convert_to_webp "$GALLERY_DIR/allostar/$i.png"
done

echo "🎉 Conversion completed!"
echo "📊 Summary:"
echo "   - Starlet: 5 images converted"
echo "   - StarArc: 6 images converted" 
echo "   - AlloyStar: 10 images converted"
echo "   - Total: 21 images converted to WebP format"

echo ""
echo "💡 Next steps:"
echo "   1. Update image paths in ProductDetail.tsx to use .webp extension"
echo "   2. Test the website to ensure images load correctly"
echo "   3. Consider removing original PNG files to save space"
