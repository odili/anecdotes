FROM node:buster-slim
WORKDIR /opt/app
COPY ./srv .
RUN yarn
WORKDIR /opt/app/anecdotes
RUN yarn
RUN yarn build
WORKDIR /opt/app
EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["index.js"]
