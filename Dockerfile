FROM node:18
EXPOSE * 
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "server.js"]
