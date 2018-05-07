#!/bin/sh

# Change variables before building
sed -i s/ONESIGNAL_APP_KEY/$ONESIGNAL_APP_KEY/g netlify.toml
sed -i s/ONESIGNAL_APP_AUTH_KEY/$ONESGINAL_APP_AUTH_KEY/g netlify.toml

# Deploy the site
hexo deploy