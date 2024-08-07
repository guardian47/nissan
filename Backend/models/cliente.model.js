import {Schema, model} from 'mongoose';

export const clienteS = new Schema({
    name:{
        type:String
    },
    last_name:{
        type:String
    },
    estado:{
        type:String
    }
})

export const clienteM = new model('clientes', clienteS)