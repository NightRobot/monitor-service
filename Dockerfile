
FROM node:12-alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git curl && \
  npm install --quiet node-gyp -g

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

COPY google_compute_engine ./

USER node

RUN npm install

RUN wget https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 -O cloud_sql_proxy

RUN chmod +x cloud_sql_proxy

RUN ./cloud_sql_proxy -instances=pleasant-perfect-01activities:asia-east1:pleasant-perfect-01activities=tcp:3306  -credential_file=/home/node/app/google_compute_engine &

COPY --chown=node:node . .

EXPOSE 4002

CMD [ "npm", "start" ]
