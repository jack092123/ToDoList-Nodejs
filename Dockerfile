FROM node:8.11.0-slim
LABEL maintainer "jack092123@gmail.com"

EXPOSE 3000

ENV PORT 3000
ENV MONGODB_URL "mongodb://db:27017/Todo"

RUN apt-get update && apt-get install -y \
        git \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

WORKDIR /home
RUN git clone https://github.com/jack092123/ToDoList-Nodejs

WORKDIR /home/ToDoList-Nodejs
RUN npm install

ENTRYPOINT ["npm", "start"]
