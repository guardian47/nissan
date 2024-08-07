import { clienteS } from "./cliente.model.js";
import { model } from "mongoose";

export const adeudoM = new model('adeudos', clienteS)