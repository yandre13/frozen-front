FROM node:14.16.1-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]