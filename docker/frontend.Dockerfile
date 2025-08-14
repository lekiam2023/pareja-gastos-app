#Imagen base de Node.js para construir el frontend
FROM node:18

WORKDIR /app

#Copiamos package.json y package-lock.json
COPY package*.json ./

#Instala las dependencias
RUN npm install

#Copiamos todo el codigo del frontend
COPY . .

#Exponemos el puerto donde corre React
EXPOSE 3000

#Comandos por defecto
CMD ["npm", "start"]