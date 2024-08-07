import {Schema, model} from 'mongoose';

const nominaS = new Schema({
    empleado:{
        type:String
    },
    sueldo:{
        type:Number
    },
    puesto:{
        type:String
    },
    descontar:{
        type:Number
    }
})

export const nominaM = new model('nominas', nominaS)