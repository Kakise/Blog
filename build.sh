#!/bin/sh

# Change variables before building
sed -i s/ONESIGNAL_APP_KEY/$ONESIGNAL_APP_KEY/g _config.yml
sed -i s/ONESIGNAL_APP_AUTH_KEY/$ONESIGNAL_APP_AUTH_KEY/g _config.yml
sed -i s/REPO_PLACEHOLDER/$REPO/g source/admin/config.yml

echo $REPOSITORY_URL

# Change navigation
pip3 install pyyaml
python nav.py

# Deploy the site
hexo deploy
