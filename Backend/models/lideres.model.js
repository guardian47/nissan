import {Schema,model} from "mongoose";

export const lideresS = new Schema({
    name:{
        type:String
    },
    cargo:{
        type:String
    },
    area:{
        type:String
    }
})
export const lideresM = new model('lideres', lideresS)