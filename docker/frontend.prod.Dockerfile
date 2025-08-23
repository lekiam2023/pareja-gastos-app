#Imagen base de Node.js para construir el frontend
FROM node:18-alpine AS build

WORKDIR /app

#Copiamos package.json y package-lock.json
COPY package*.json ./

#Instala las dependencias
RUN npm install

#Copiamos todo el codigo del frontend
COPY . .

#Construir la app para produccion
RUN npm run build 

#Servir la build con nginx
FROM nginx:1.25-alpine

#Copiar la build de React al contenedor de nginx
COPY --from=build /app/build /usr/share/nginx/html

#Configuracion de Nginx para React
COPY nginx.conf /etc/nginx/conf.d/default.conf
#Exponemos el puerto donde corre React
EXPOSE 80

#Comandos por defecto
CMD ["nginx", "-g", "daemon off;"]

