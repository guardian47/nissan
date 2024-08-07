import { lideresS } from "./lideres.model.js";
import { model } from "mongoose";

export const entrenadoresM = new model('entrenadores', lideresS)