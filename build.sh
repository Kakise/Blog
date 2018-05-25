#!/bin/bash

# Self explanatory
REPO=(${REPOSITORY_URL//:/ })

# Print various debug vars
echo ${REPO[1]}
echo $URL
echo $CONTEXT
echo $PULL_REQUEST

# Replace placeholders
sed -i s@ONESIGNAL_APP_KEY@"$ONESIGNAL_APP_KEY"@g _config.yml
sed -i s@ONESIGNAL_APP_AUTH_KEY@"$ONESIGNAL_APP_AUTH_KEY"@g _config.yml
sed -i s@SITEURL@"$URL"@g _config.yml
sed -i s@REPO_PLACEHOLDER@"${REPO[1]}"@g source/admin/config.yml
sed -i s@SITEURL_PLACEHOLDER@"$URL"@g source/admin/config.yml
sed -i s@URL_PLACEHOLDER@"$URL"@g themes/cactus/layout/index.ejs
sed -i s@SITEURL_PLACEHOLDER@"$URL"@g source/admin/config.yml
sed -i s@URLPLACEHOLDER@"$URL"@g themes/cactus/source/js/main.js

# Add various navigation menus
LINKS=`cat source/_data/nav.json | jq .nav[].link`
LINKS=(${LINKS//
/ })

URLS=`cat source/_data/nav.json | jq .nav[].url`
URLS=(${URLS//
/ })

SOC=`cat source/_data/social.json | jq .nav[].link`
SOC=(${SOC//
/ })

SOC_URLS=`cat source/_data/social.json | jq .nav[].url`
SOC_URLS=(${SOC_URLS//
/ })

NAV="\n"
URLS_PWA="\n"
SOC_NAV="\n"

for (( i=1; i<${#LINKS[@]}+1; i++ ));
do
    NAV="$NAV  ${LINKS[i-1]}: ${URLS[i-1]}\n"
    URLS_PWA="$URLS_PWA        - ${URLS[i-1]}\n"
done

for (( i=1; i<${#SOC[@]}+1; i++ ));
do
    SOC_NAV="$SOC_NAV  ${SOC[i-1]}: ${SOC_URLS[i-1]}\n"
done

sed -i "s%NAV_PLACEHOLDER%$NAV%g" themes/cactus/_config.yml
sed -i "s%SOC_PLACEHOLDER%$SOC_NAV%g" themes/cactus/_config.yml
sed -i "s%URL_PLACEHOLDER%$URLS_PWA%g" _config.yml

# Build the site (The $PULL_REQUEST == "true" is here because all posts are made using the CMS thus adding this avoid notifications for non-posts changes)
if [[ $CONTEXT = "production" && $PULL_REQUEST == "true" ]]
then
    hexo deploy
else
    hexo generate
fi