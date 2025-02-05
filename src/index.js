// Importamos la aplicación  
const app = require('./app');  

// Definimos el puerto  
const port = 8080;  

// Iniciamos el servidor  
(async () => {  
    console.log('Iniciando servidor...');  // Mensaje de que se esta iniciando

    app.listen(port, () => {  
        console.log(`Servidor en el puerto ${port}`);  // Mensaje de servicior inciado y en que puerto
    });  
})();  


