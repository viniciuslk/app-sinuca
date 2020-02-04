FROM node:12.14.1-alpine as builder

WORKDIR /app/frontend
COPY package.json /app/frontend
COPY yarn.lock /app/frontend

RUN yarn install

COPY . /app/frontend/

EXPOSE 3000:3000
