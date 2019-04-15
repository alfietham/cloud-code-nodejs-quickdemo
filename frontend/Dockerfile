FROM node:8

WORKDIR /node-frontend

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT [ "node", "--inspect=9229", "src/app.js" ]
