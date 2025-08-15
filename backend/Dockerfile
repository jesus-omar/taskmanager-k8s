FROM node:18

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json desde backend
COPY backend/package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código desde backend
COPY backend/. .

# Exponer puerto
EXPOSE 10000

# Comando para iniciar la app
CMD ["npm", "start"]
