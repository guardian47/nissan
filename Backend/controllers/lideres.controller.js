import { lideresM } from "../models/lideres.model.js";

const test =()=>{
    console.log('se llama lideres')
}

lideresM.create({
    name:"Carlos",
    cargo:'gerente',
    area:'sistemas'
})

export default test;