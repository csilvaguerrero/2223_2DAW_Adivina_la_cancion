<<<<<<< HEAD
/**
 *	@file Contiene el modelo de la vista del inicio de la web.
 *	@autor Domingo Miño Redondo
 */

import {Vista} from './vista.js'

/**
 *	Implementa una vista del menú de navegación.
 */
export class VistaInicio extends Vista{
	/**
	 *	Constructor de la clase.
	 *	@param controlador {Controlador} Controlador de la vista.
	 *	@param div {HtmldivElement} div de HTML en el que se desplegará la vista de inicio.
	 */
	constructor(controlador, div){
		super(div)
		this.controlador = controlador

		this.divBotones = document.getElementById('div2');

		if(document.getElementsByTagName('header')[0]){
			this.menuAdmin = document.getElementById('barra-admin');
			this.moverMenuAdmin();
		}

	}

	moverMenuAdmin(){
		this.divBotones.style.position = "absolute";
		this.divBotones.style.top = "7vh";
	}
=======
/**
 *	@file Contiene el modelo de la vista del inicio de la web.
 *	@autor Domingo Miño Redondo
 */

import {Vista} from './vista.js'

/**
 *	Implementa una vista del menú de navegación.
 */
export class VistaInicio extends Vista{
	/**
	 *	Constructor de la clase.
	 *	@param controlador {Controlador} Controlador de la vista.
	 *	@param div {HtmldivElement} div de HTML en el que se desplegará la vista de inicio.
	 */
	constructor(controlador, div){
		super(div)
		this.controlador = controlador

		this.divBotones = document.getElementById('div2');

		if(document.getElementById('barra-admin')){
			this.menuAdmin = document.getElementById('barra-admin');
			this.moverMenuAdmin();
		}

	}

	moverMenuAdmin(){
		this.divBotones.style.position = "absolute";
		this.divBotones.style.top = "10vh";
	}

>>>>>>> 9fbd117503617ee6c16ba721e4b90a5b8499a074
}