# 1. Usamos una versión ligera de Node como base
FROM node:20-alpine

# 2. Creamos y nos movemos a la carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de definición de paquetes
COPY package*.json ./

# 4. Instalamos solo las dependencias de producción (sin devDependencies)
RUN npm install --only=production

# 5. Copiamos el resto del código de nuestra app al contenedor
COPY . .

# 6. Exponemos el puerto 8080
EXPOSE 8080

# 7. El comando que se ejecutará al encender el contenedor
CMD ["npm", "start"]