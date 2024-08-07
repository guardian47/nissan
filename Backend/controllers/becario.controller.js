import { becarioM } from "../models/becarios.model.js";

const test =() =>{
    console.log("se llama becarios")
}
becarioM.create({
    name:'karim',
    age:20,
    puesto:'auxiliar'
})
export default test;