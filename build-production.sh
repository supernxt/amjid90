#!/bin/bash
# Production build script for Super Next Technologies
echo "Building frontend..."
vite build

echo "Building backend..."
esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --external:./vite --external:vite --external:@vitejs/* --external:@replit/vite-*

echo "✅ Production build complete!"
echo "Upload the dist folder to your VPS."
