FROM node:16
WORKDIR /myapp
COPY . .
RUN npm install 
EXPOSE 5000
CMD [ "npm","run","dev" ]


# CMD [ "node","public/index.js" ]
