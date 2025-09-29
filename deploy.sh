#!/bin/bash

SERVER="root@172.104.164.128"
DEPLOY_PATH="/var/www/main"
BACKUP_PATH="/var/www/backup-main"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# =========================
# Build Nuxt
# =========================
echo "=== Build Nuxt ==="
yarn build   # tidak perlu --dotenv karena runtime env dari ecosystem.config.js
# sudo yarn generate

# =========================
# Backup folder lama
# =========================
echo "=== Backup folder lama ==="
ssh $SERVER "mkdir -p $BACKUP_PATH && if [ -d $DEPLOY_PATH ]; then mv $DEPLOY_PATH ${BACKUP_PATH}/parlor-landing_${TIMESTAMP}; fi"

# =========================
# Deploy versi baru
# =========================
echo "=== Deploy versi baru ==="
rsync -avz --progress .output/ $SERVER:$DEPLOY_PATH
# rsync -avz ecosystem.config.js $SERVER:$DEPLOY_PATH/


echo "=== Deploy selesai ==="
