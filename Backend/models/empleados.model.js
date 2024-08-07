import {Schema,model} from 'mongoose';

export const empleadosS = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    puesto:{
        type:String
    }
})

export const empleadoM = new  model('empleados', empleadosS)