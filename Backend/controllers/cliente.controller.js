import { clienteM } from "../models/cliente.model.js";

const test = ()=>{
    console.log("se llama cliente")
}
clienteM.create({
    name:"Carlos",
    last_name:"Gtz",
    estado:"Pagado"
})

export default test;

