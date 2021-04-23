const express = require('express');
const app = express();
const mysql = require('mysql');
const myConn = require('express-myconnection');
const routes = require('./routes');
const cors = require('cors');

app.set('port', process.env.PORT || 9000);

const optiondb = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'fghj1234',
    database: 'usuario'
};

app.use(myConn(mysql, optiondb, 'single'))

app.use(express.json());

app.use(cors());

app.get('/', (req, res)=>{
    res.send('hola mundo')
});

app.use('/api', routes);

app.listen(app.get('port'),()=>{
    console.log('estamos en el puerto 9000')
});

