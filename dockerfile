FROM node:16-alpine

WORKDIR /user/src/app

COPY package.json ./

RUN npm install 

COPY ./ ./

CMD ["npm", "run", "start"]

# docker run -p 3000:3000 ecd3a 로 실행