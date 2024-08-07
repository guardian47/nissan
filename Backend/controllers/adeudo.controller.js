import { adeudoM } from "../models/adeudo.model.js";

const test = ()=>{
    console.log("se llama adeudo")
}

adeudoM.create({
    name:'Jose',
    last_name:'Alvarez',
    estado:'pendiente'
})

export default test;