FROM node:lts-slim as builder

ARG ENVIRONMENT

WORKDIR /tmp/build

COPY ./ /tmp/build

RUN (cd /tmp/build && \
    npm install && \
    REACT_APP_STAGE="${ENVIRONMENT}" npm run build)


FROM nginx:stable-alpine
LABEL Name=react-project-template
LABEL Maintainer=kamikaze.is.waiting.you@gmail.com

WORKDIR /usr/share/nginx/html/

COPY --from=builder /tmp/build/build/ ./
COPY .docker/nginx.template /etc/nginx/nginx.template
COPY .docker/docker-entrypoint.sh /

RUN ["chmod", "+x", "/docker-entrypoint.sh"]
CMD ["sh", "/docker-entrypoint.sh"]
EXPOSE 8080
