FROM node:8

WORKDIR /node-backend

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT [ "node", "--inspect=9229", "server.js" ]
