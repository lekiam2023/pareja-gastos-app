#Etapa de desarrollo
FROM node:18-alpine

#Crear directorio de trabajo
WORKDIR /app

#Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

#Copiar el resto del codigo
COPY . .

# Exponer puerto de React
EXPOSE 3000

#Comando para desarrollo
CMD ["npm", "start"]