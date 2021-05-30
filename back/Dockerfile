FROM node:current-alpine as build

WORKDIR /var/www

COPY package.json package-lock.json ./
RUN npm install --only=prod

COPY . .

EXPOSE 3000

CMD npm start
