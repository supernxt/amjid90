#!/bin/bash
# VPS Deployment Script — Super Next Technologies
# Run on VPS: bash deploy-vps.sh
set -e

echo "=== Super Next Technologies — Deploy ==="

# 1. Pull latest code
echo "[1/5] Pulling latest code..."
git pull origin main

# 2. Install / update dependencies
echo "[2/5] Installing dependencies..."
npm install --omit=dev

# 3. Build frontend (Vite)
echo "[3/5] Building frontend..."
npx vite build

# 4. Build backend (esbuild — vite excluded)
echo "[4/5] Building backend..."
npx esbuild server/index.ts \
  --platform=node \
  --packages=external \
  --bundle \
  --format=esm \
  --outdir=dist \
  --external:./vite \
  --external:vite \
  --external:@vitejs/* \
  --external:@replit/vite-*

# 5. Restart (or start) pm2 with the correct command
echo "[5/5] Restarting pm2..."
if pm2 describe supernxt > /dev/null 2>&1; then
  pm2 restart supernxt --update-env
else
  pm2 start "npm run start" --name supernxt
fi

pm2 save

echo ""
echo "=== Deploy complete! supernxt.com should be live ==="
pm2 list
