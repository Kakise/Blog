#!/bin/bash

# Self explanatory
REPO=(${REPOSITORY_URL//:/ })

# Print various debug vars
echo $REPOSITORY_URL
echo $URL
echo $CONTEXT
echo $PULL_REQUEST

# Replace placeholders
sed -i s@SITEURL@"$URL"@g _config.yml
sed -i s@REPO_PLACEHOLDER@"Kakise/Blog"@g source/admin/config.yml
sed -i s@SITEURL_PLACEHOLDER@"$URL"@g source/admin/config.yml

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

hexo generate
