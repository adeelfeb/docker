FROM node:slim
WORKDIR /nodeApp
COPY . /nodeApp
RUN npm install
EXPOSE 7000
CMD node index.js