FROM node:18.12.1-bullseye-slim

ARG HOST_ADDRESS
ARG PORT
ENV HOST_ADDRESS $HOST_ADDRESS
ENV HOST_PORT    $PORT

ENV WDS_SOCKET_PORT 0
ENV WATCHPACK_POLLING true

ARG http_proxy
ARG https_proxy
RUN npm config set proxy "$http_proxy"
RUN npm config set https-proxy "$https_proxy"

# モジュールインストール
RUN mkdir -p /tmp
WORKDIR /tmp
COPY ./client/package.json /tmp/.
COPY ./client/package-lock.json /tmp/.
RUN npm config get proxy
RUN npm update -g npm
RUN npm install
# RUN npm install -g serve

WORKDIR /app
RUN ln -s /tmp/node_modules /app/.
RUN cp /tmp/package.json ./package.json
RUN cp /tmp/package-lock.json ./package-lock.json
COPY ./client/public/           public/
COPY ./client/src/              src/
COPY ./client/.env.api ./.env

CMD ["npm", "run", "start"]