import { tecnicosM } from "../models/tecnicos.model.js";

const test =()=>{
    console.log('se llama tecnicos')
}

tecnicosM.create({
    name:'Martin',
    age:30,
    puesto:'mantenimiento'
})

export default test;