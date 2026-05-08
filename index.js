const express = require('express');
const app = express();

// Cloud Run inyecta el puerto a través de las variables de entorno. 
// Si no lo encuentra, usará el 8080 por defecto.
const PORT = process.env.PORT || 8080; 

app.get('/', (req, res) => {
  res.json({ 
    mensaje: '¡Hola Google Cloud! Nuestra API está viva. 🚀',
    estado: 'OK'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});