<<<<<<< HEAD
/**
 *	@file Contiene el modelo de la vista de los puntos del juego
 *	@autor Domingo Miño Redondo
 */

import {Vista} from './vista.js'

/**
 *	Implementa una vista de inicio.
 */
export class VistaPuntos extends Vista{
	/**
	 *	Constructor de la clase.
	 *	@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista de las puntuaciones de los 3 primeros.
	 */
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		this.pulsarPuntos = document.getElementsByTagName('button')[0]
		this.pulsarPuntos.addEventListener('click', this.puntos.bind(this));
		
		this.pulsarCerrar = document.getElementsByClassName('salir')[0]
		this.pulsarCerrar.addEventListener('click', this.cerrar.bind(this))
	}
	
	puntos(){
		this.controlador.pulsarPuntos();
	}
	
	cerrar(){
		this.controlador.ocultarVistas();
	}
=======
/**
 *	@file Contiene el modelo de la vista de los puntos del juego
 *	@autor Domingo Miño Redondo
 */

import {Vista} from './vista.js'

/**
 *	Implementa una vista de inicio.
 */
export class VistaPuntos extends Vista{
	/**
	 *	Constructor de la clase.
	 *	@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista de las puntuaciones de los 3 primeros.
	 */
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		this.pulsarPuntos = document.getElementsByTagName('button')[0]
		this.pulsarPuntos.addEventListener('click', this.puntos.bind(this));
		
		this.pulsarCerrar = document.getElementsByClassName('salir')[0]
		this.pulsarCerrar.addEventListener('click', this.cerrar.bind(this))
	}
	
	puntos(){
		this.controlador.pulsarPuntos();
	}
	
	cerrar(){
		this.controlador.ocultarVistas();
	}
>>>>>>> 9fbd117503617ee6c16ba721e4b90a5b8499a074
}