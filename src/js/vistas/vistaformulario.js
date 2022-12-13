import {Vista} from './vista.js'

export class VistaFormulario extends Vista{
    constructor(controlador, div){
        super(div)
        this.controlador = controlador
    }
} 