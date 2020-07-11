FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

##COPY src ./
COPY . .

EXPOSE 3900

CMD [ "npm", "start" ]

