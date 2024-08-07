import { entrenadoresM } from "../models/entrenadores.model.js";

const test =()=>{
    console.log('se llama a entrenadores')
}

entrenadoresM.create({
    name:'Jose',
    cargo:'supervisor',
    area:'sistema'
})

export default test;