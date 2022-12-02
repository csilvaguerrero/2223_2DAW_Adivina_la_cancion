/**
 *	@file Contiene el modelo de la vista de inicio de la web
 *	@autor Domingo Miño Redondo
 */

import {Vista} from './vista.js'

/**
 *	Implementa una vista de instrucciones.
 */
export class VistaInstrucciones extends Vista{
	/**
	 *	Constructor de la clase.
	 *	@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista de instrucciones.
	 */
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		
		this.pulsarInstrucciones = document.getElementsByTagName('button')[1]
		this.pulsarInstrucciones.addEventListener('click', this.instrucciones.bind(this))
		
		this.pulsarCerrar = document.getElementsByClassName('salir')[1]
		this.pulsarCerrar.addEventListener('click', this.cerrar.bind(this))
	}
	
	instrucciones(){
		this.controlador.pulsarInstrucciones();
	}
	
	cerrar(){
		this.controlador.ocultarVistas();
	}
}