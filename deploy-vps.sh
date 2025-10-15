#!/bin/bash
# VPS Deployment Script for Super Next Technologies

echo "🚀 Building Super Next Technologies..."

# Build frontend
echo "📦 Building frontend..."
vite build

# Build backend with vite excluded
echo "📦 Building backend..."
esbuild server/index.ts \
  --platform=node \
  --packages=external \
  --bundle \
  --format=esm \
  --outdir=dist \
  --external:./vite \
  --external:vite \
  --external:@vitejs/* \
  --external:@replit/vite-*

echo "✅ Build complete!"
echo "📁 Files ready in dist/ folder"
