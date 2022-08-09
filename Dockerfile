FROM node:alpine
VOLUME /api
WORKDIR /api
COPY . .
RUN npm install -g nodemon
RUN npm install
CMD ["nodemon", "index.js"]
EXPOSE 3000