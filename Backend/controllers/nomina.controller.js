import { nominaM } from "../models/nomina.model.js";

const test = ()=>{
    console.log('se llama nomina')
}
nominaM.create({
    empleado:'Carlos',
    sueldo:3000, 
    puesto:"Auxiliar de sistemas",
    descontar:200
})
export default test;