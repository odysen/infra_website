FROM node:22-bookworm AS build
ENV NODE_ENV="development"
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build
FROM docker.io/caddy:2.8.4-alpine
COPY --from=build /app/dist /opt/site
COPY Caddyfile /etc/caddy/Caddyfile