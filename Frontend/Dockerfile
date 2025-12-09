# -----------------------
# Stage 1: Build Angular App
# -----------------------
FROM node:20-alpine AS build
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Quellcode kopieren und bauen
COPY . .
RUN npm run build -- --output-path=dist

# -----------------------
# Stage 2: Serve with Nginx
# -----------------------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx-Konfiguration für Angular Routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
