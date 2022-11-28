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
	}
}