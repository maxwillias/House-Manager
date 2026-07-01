FROM node:22 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG BUILD_CONFIGURATION=production

RUN npm run build -- --configuration=${BUILD_CONFIGURATION}

FROM nginx:alpine

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80