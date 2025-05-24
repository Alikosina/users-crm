FROM node:18-alpine

RUN apk add --no-cache yarn

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:migrate:dev"] 