FROM node:14.15.0-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i --only=prod

COPY . .

RUN npm run build

FROM nginx:1.18.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000