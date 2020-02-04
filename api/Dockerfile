FROM node:12.14.1-alpine as development

WORKDIR /app/api
COPY package.json .
COPY yarn.lock .

RUN yarn install --only=development

COPY . .

## PROD ##
FROM node:12.14.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app/api
COPY package.json .
COPY yarn.lock .

RUN yarn install --only=production

COPY . .
COPY --from=development /app/api/dist ./dist

EXPOSE 3001:3333

CMD ["node", "dist/server"]