#!/bin/bash
# VPS Deployment Script — Super Next Technologies
# Run on VPS: bash deploy-vps.sh
set -e

echo "=== Super Next Technologies — Deploy ==="

# 0. Force public npm registry (bypasses any Replit internal proxy)
echo "[0/5] Setting npm registry to public..."
npm config set registry https://registry.npmjs.org

# 1. Pull latest code
echo "[1/5] Pulling latest code..."
git pull origin main

# 2. Install runtime dependency nodemailer from public registry
echo "[2/5] Installing nodemailer..."
npm install nodemailer --save

# 3. Build frontend (Vite)
echo "[3/5] Building frontend..."
npx vite build

# 4. Build backend — nodemailer stays external (loaded from node_modules)
echo "[4/5] Building backend..."
npx esbuild server/index.ts \
  --platform=node \
  --bundle \
  --format=esm \
  --outdir=dist \
  --external:vite \
  --external:@vitejs/plugin-react \
  --external:@replit/vite-plugin-cartographer \
  --external:@replit/vite-plugin-runtime-error-modal \
  --external:nodemailer

# 5. Restart pm2
echo "[5/5] Restarting pm2..."
if pm2 describe supernxt > /dev/null 2>&1; then
  pm2 restart supernxt --update-env
else
  NODE_ENV=production pm2 start "node dist/index.js" --name supernxt
fi

pm2 save

echo ""
echo "=== Deploy complete! supernxt.com should be live ==="
pm2 list
