import { empleadoM } from "../models/empleados.model.js";

const test =()=>{
    console.log('se llama empleado')
}

empleadoM.create({
    name:'Josue',
    age:24,
    puesto:'Sistemas'
})

export default test;