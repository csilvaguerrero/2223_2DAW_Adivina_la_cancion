import {Vista} from './vista.js'

export class VistaResumen extends Vista{

    constructor(controlador, div){

        super(div)
        this.controlador = controlador

        this.btnMostrar = document.getElementById('mostrar-puntuacion')
        this.btnAceptar = document.getElementById('aceptar-puntuacion')
        this.btnCancelar = document.getElementById('cancelar-puntuacion')

        this.btnMostrar.addEventListener('click', this.resumen.bind(this))
 

        this.btnAceptar.addEventListener('click', this.formulario.bind(this))
        this.btnCancelar.addEventListener('click', this.cerrar.bind(this))
    }

    resumen(){
        this.controlador.pulsarResumen()
    }
    
    cerrar(){
        this.controlador.ocultarVistas()
    }
    formulario(){
        this.controlador.mostrarFormulario()
    }
}