# Crear una imgagen apartir de Node.js
# Version Soporte a largo plazo-Ligera
FROM node:lts-slim

#Crea y cambiamos al directorio /app
WORKDIR /app/

# Copiar el archivo package.jason y package-lock.jason a /app
COPY ./package*.json /app/

# Intalar las dependencias de node
RUN npm install

#Copia el contenido del proyecto a /app
COPY . /app

#Exponer el puerto 80
EXPOSE 80

# Iniciar el servidor de node 
CMD [ "npm", "start" ]