const express = require('express');
const sequelize = require('./database/sequelize');
const router = require('./router/router')

require('./database/associations')
const cors = require('cors');

const app = express();

 app.use(cors())
 app.use(express.json());
 app.use(express.urlencoded({ extended: false} ));

//definimos un puerto para HTTP
const port = 3000;



//Creamos una ruta para el directorio raíz en este caso solo envía el texto 'Hello world!!!' pero es común que se envíe una vista (archivo HTML)
app.use('/', router);

//Comienza a escuchar el puerto definido 3000
app.listen(port, ()=>{
    console.log('Listen on the port 3000');
    sequelize.sync({ force: true }).then(()=>{
        console.log("nos contectamos exitosamente");
    }).catch(error => {
        console.log('Algo paso', error);
    });
});
