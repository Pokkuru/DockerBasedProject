FROM node:20.9.0-bookworm-slim

ARG HOST_ADDRESS
ARG PORT
ENV HOST_ADDRESS $HOST_ADDRESS
ENV HOST_PORT    $PORT

ENV WDS_SOCKET_PORT 0
ENV WATCHPACK_POLLING true

# モジュールインストール
RUN mkdir -p /tmp
WORKDIR /tmp
COPY ./client/package.json /tmp/.
COPY ./client/package-lock.json /tmp/.
RUN npm update -g npm
RUN npm update
RUN npm install
RUN npm install -g serve

WORKDIR /app
RUN ln -s /tmp/node_modules /app/.
RUN cp /tmp/package.json ./package.json
RUN cp /tmp/package-lock.json ./package-lock.json
COPY ./client/public/           public/
COPY ./client/src/              src/
# COPY ./client/.env.api ./.env

COPY ./client/tsconfig.json .
COPY ./client/tsconfig.node.json .
COPY ./client/vite.config.ts .
COPY ./client/index.html .
COPY ./client/.eslintrc.cjs .

CMD ["npm", "run", "dev"]