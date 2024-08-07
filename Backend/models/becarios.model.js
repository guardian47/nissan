import { empleadosS } from "./empleados.model.js";
import { model } from "mongoose";

export const becarioM = new model('becarios',empleadosS)
