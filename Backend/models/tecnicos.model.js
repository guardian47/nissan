import { empleadosS } from "./empleados.model.js";
import { model } from "mongoose";

export const tecnicosM = new model('tecnicos',empleadosS)