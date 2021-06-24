FROM node:14.17.1-alpine3.13

WORKDIR /usr/app

copy package.json ./
copy yarn.lock ./

RUN yarn install

copy . .
