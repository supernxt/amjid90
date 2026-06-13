#!/bin/bash
# VPS Deployment Script — Super Next Technologies
# Run on VPS: bash deploy-vps.sh
set -e

echo "=== Super Next Technologies — Deploy ==="

# 1. Pull latest code
echo "[1/5] Pulling latest code..."
git pull origin main

# 2. Install / update dependencies (only needed for build tools)
echo "[2/5] Installing dependencies..."
npm install

# 3. Build frontend (Vite)
echo "[3/5] Building frontend..."
npx vite build

# 4. Build backend — bundle everything EXCEPT Node built-ins and vite
#    nodemailer and all runtime deps are bundled in so the VPS needs no npm registry
echo "[4/5] Building backend (self-contained bundle)..."
npx esbuild server/index.ts \
  --platform=node \
  --bundle \
  --format=esm \
  --outdir=dist \
  --external:vite \
  --external:@vitejs/plugin-react \
  --external:@replit/vite-plugin-cartographer \
  --external:@replit/vite-plugin-runtime-error-modal

# 5. Restart (or start) pm2 with the correct command
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
