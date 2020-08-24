FROM node:12-alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . .

# RUN cp .env.example .env

EXPOSE 3333

CMD yarn dev 