FROM node:22-bookworm AS BUILD
ENV NODE_ENV="development"
WORKDIR /app
COPY package.json package.json
RUN npm i
COPY . .
RUN npm run build