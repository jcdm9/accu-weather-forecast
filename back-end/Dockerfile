FROM node:16-alpine3.15

WORKDIR /app

# Dev needed libraries
RUN npm install -g nodemon

COPY package*.json /app

RUN npm install

EXPOSE 3000
