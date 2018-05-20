#!/bin/sh

# Change variables before building
sed -i s/REPO_PLACEHOLDER/$REPO/g source/admin/config.yml

# Change navigation
pip3 install pyyaml
python nav.py

# Deploy the site
hexo deploy
