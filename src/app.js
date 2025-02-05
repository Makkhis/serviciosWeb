// Importamos express  
const express = require('express');  

// Creamos la app  
const app = express();  

// Habilitamos JSON  
app.use(express.json());  

// Ruta principal  
app.get('/', (req, res) => {  
    res.send('Hello world'); // Respuesta al cliente  
});  

// Exportamos la app  
module.exports = app;  
