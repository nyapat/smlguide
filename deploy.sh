#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into build output
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:nyapat/smlguide.git master:gh-pages

cd -
read -p "enter"