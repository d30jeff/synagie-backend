FROM node:15-alpine3.10 AS development

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn start:dev admin-api
