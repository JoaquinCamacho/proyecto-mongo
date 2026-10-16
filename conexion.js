const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conexión exitosa con MongoDB');
    })
    .catch((error) => {
        console.error('Error de conexión:', error.message);
    }); 

