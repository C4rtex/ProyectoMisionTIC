"use strict"

const express = require('express');
const app = express();
const cors = require(cors);

const ejercicio = require('./src/routes/ejercicio')

// Middlerwares
app.use(cors());
app.use(express.json());
require('dotenv').config();

// Uso de rutas
app.use('/', ejercicio);

// Puerto
app.set('port', process.env.PORT || 5000);

app.get('port', () => {
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`)
});

