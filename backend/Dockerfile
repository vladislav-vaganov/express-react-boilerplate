FROM node:14.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 7337

CMD ["node", "server.js"]