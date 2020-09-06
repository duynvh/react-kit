FROM node:13.1-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

COPY . ./

RUN yarn && yarn build

FROM nginx:1.17-alpine
EXPOSE 80

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html

# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# COPY --from=builder /nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]