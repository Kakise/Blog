#!/bin/bash

REPO=(${REPOSITORY_URL//:/ })
echo ${REPO[1]}
echo $URL
echo $CONTEXT
echo $PULL_REQUEST

# Change variables before building
sed -i s@ONESIGNAL_APP_KEY@"$ONESIGNAL_APP_KEY"@g _config.yml
sed -i s@ONESIGNAL_APP_AUTH_KEY@"$ONESIGNAL_APP_AUTH_KEY"@g _config.yml
sed -i s@SITEURL@"$URL"@g _config.yml
sed -i s@REPO_PLACEHOLDER@"${REPO[1]}"@g source/admin/config.yml
sed -i s@SITEURL_PLACEHOLDER@"$URL"@g source/admin/config.yml

# Change navigation
pip3 install pyyaml
python nav.py

# Deploy the site
if [[ $CONTEXT = "production" && $PULL_REQUEST == "true" ]]
then
    hexo deploy
else
    hexo generate
fi