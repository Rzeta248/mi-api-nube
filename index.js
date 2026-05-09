const express = require('express');
const app = express();

// Cloud Run inyecta el puerto a través de las variables de entorno. 
// Si no lo encuentra, usará el 8080 por defecto.
const PORT = process.env.PORT || 8080; 

app.get('/', (req, res) => {
  res.json({ 
    mensaje: '¡Magia pura! Este despliegue fue 100% automático desde GitHub. 🪄☁️',
    estado: 'OK',
    version: '3.0'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});