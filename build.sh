#!/bin/bash

# Self explanatory
REPO=(${REPOSITORY_URL//:/ })

# Print various debug vars
echo ${REPO[1]}
echo $URL
echo $CONTEXT
echo $PULL_REQUEST

# Replace placeholders
URL_NO_PROTOCOL=(${URL//\/\// })
sed -i s@ONESIGNAL_APP_KEY@"$ONESIGNAL_APP_KEY"@g _config.yml
sed -i s@ONESIGNAL_APP_AUTH_KEY@"$ONESIGNAL_APP_AUTH_KEY"@g _config.yml
sed -i s@SITEURL@"$URL"@g _config.yml
sed -i s@REPO_PLACEHOLDER@"${REPO[1]}"@g source/admin/config.yml
sed -i s@SITEURL_PLACEHOLDER@"$URL"@g source/admin/config.yml
sed -i s@URL_PLACEHOLDER@"$URL"@g themes/cactus/layout/index.ejs

# Add various navigation menus
LINKS=`cat source/_data/nav.json | jq .nav[].link`
LINKS=(${LINKS//
/ })

URLS=`cat source/_data/nav.json | jq .nav[].url`
URLS=(${URLS//
/ })

URLS_PWA=""

for (( i=1; i<${#LINKS[@]}+1; i++ ));
do
    URLS_PWA="$URLS_PWA        - ${URLS[i-1]}\n"
done

sed -i "s%        - URL_PLACEHOLDER%$URLS_PWA%g" _config.yml

if [[ $CONTEXT = "production" ]]
then
    hexo deploy
else
    hexo generate
fi