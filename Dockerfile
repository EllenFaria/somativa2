FROM node:18-alpine

WORKDIR /somativa2/

COPY . .

RUN npm ci 

RUN npm run build

CMD ["npm", "start"]