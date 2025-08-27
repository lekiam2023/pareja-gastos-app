#Imagen oficial de Node.js
FROM node:18

#Directorio de trabajo dentro del contenedor
WORKDIR /app

#Copiamos los archivos package.json
COPY package*.json ./

#Intalamos las dependencias 
RUN npm install

#Copiamos todo el codigo
COPY . .

#Exponemos el puerto de nuestro backend
EXPOSE 4000

#Comandos por defectos
CMD ["npm", "start"]
