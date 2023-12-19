#!/usr/bin/env sh

# 忽略错误
set -e

npm i

# 构建
npm run build:demo

# 进入待发布的目录
cd docs

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:liangyi-h5/yi-infinite-loading-vue3.git main

cd -