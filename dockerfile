FROM node:16-alpine

WORKDIR /user/src/app

COPY package.json ./

RUN npm install 

COPY ./ ./

CMD ["npm", "run", "start"]

# 포트번호 4000번으로 실행
# docker run -p 4000:3000 ecd3a 로 실행