# The FROM instruction sets the Base Image for subsequent instructions.
# Using Nginx as Base Image
FROM node:9.2.0
MAINTAINER inwecrypto <support@inwecrypto.com>

COPY ./ /tmp/build
COPY ./env.cn.js /tmp/build/src/pc/lib/app/js/env.js

WORKDIR /tmp/build/pc
RUN yarn && yarn run build

WORKDIR /tmp/build/mobile
RUN yarn && yarn run build

WORKDIR /tmp/build/target
RUN yarn && yarn run build
