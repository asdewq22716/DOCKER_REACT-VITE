# Stage 1: Build the application
FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

# Set npm to not show progress to reduce log output size
RUN npm set progress=false

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
