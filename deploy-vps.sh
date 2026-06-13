#!/bin/bash
# VPS Deployment Script — Super Next Technologies
# The dist/ folder is pre-built in Replit and committed to git.
# No npm install or build needed on the VPS.
# Run on VPS: bash deploy-vps.sh
set -e

echo "=== Super Next Technologies — Deploy ==="

echo "[1/2] Pulling latest code + pre-built dist..."
git pull origin main

echo "[2/2] Restarting pm2..."
if pm2 describe supernxt > /dev/null 2>&1; then
  NODE_ENV=production pm2 restart supernxt --update-env
else
  NODE_ENV=production pm2 start "node dist/index.js" --name supernxt
fi

pm2 save

echo ""
echo "=== Deploy complete! supernxt.com should be live ==="
pm2 list
