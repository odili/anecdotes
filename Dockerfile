FROM node:buster-slim
WORKDIR /opt/app
COPY ./srv .
RUN yarn
WORKDIR /opt/app/anecdotes
RUN yarn \
  && yarn build \
  && rm -rf node_modules 
WORKDIR /opt/app
EXPOSE 3000
ENTRYPOINT ["node"]
CMD ["index.js"]
