# Imagen base de Node.js
FROM node:18

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto en el que corre la app
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
