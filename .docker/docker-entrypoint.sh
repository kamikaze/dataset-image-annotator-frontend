#!/bin/sh
set -ex

envsubst '$$BUCKET' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'
