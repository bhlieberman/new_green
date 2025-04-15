FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:latest AS run

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

ENTRYPOINT ["node", "build"]