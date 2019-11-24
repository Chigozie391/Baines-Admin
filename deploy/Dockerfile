FROM node:12-alpine

WORKDIR /usr/src/app/dist

COPY dist .

WORKDIR /usr/src/app

RUN ls

ENV PORT 80 

EXPOSE 80


CMD ["node", "dist/server.js"]