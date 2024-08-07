import mongoose from  'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import testcliente from './Backend/controllers/cliente.controller.js';
import testadeudo from './Backend/controllers/adeudo.controller.js';
import testempleados from './Backend/controllers/empleado.controller.js';
import testbecarios from './Backend/controllers/becario.controller.js';
import testlideres from './Backend/controllers/lideres.controller.js';
import testentrenadores from './Backend/controllers/entrenadores.controller.js';
import testtecnicos from './Backend/controllers/tecnicos.controller.js';
import testnomina from './Backend/controllers/nomina.controller.js';
dotenv.config()

mongoose.connect(process.env.url)

.then(()=>{
    console.log('esta conenctado con la base de datos')
})
.catch((err)=>{
    console.log('error con la conexion', err)
})

const app = express()
app.use(cors())

app.listen(4005,()=>{
    console.log('si funciona el servidor')
})

testcliente()
testadeudo()
testempleados()
testbecarios()
testlideres()
testentrenadores()
testtecnicos()
testnomina()