# stage 1
#FROM node:latest as node
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build --prod

# stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/test-project /usr/share/nginx/html


# Stage 1

FROM node:latest as node

RUN mkdir -p /app

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2

FROM nginx:alpine
COPY --from=node /app/dist/test-project /usr/share/nginx/html
