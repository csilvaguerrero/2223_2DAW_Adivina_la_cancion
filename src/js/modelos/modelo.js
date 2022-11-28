/**
 *	@file Contiene el modelo de la web.
 *	@autor Domingo Miño Redondo
 */

/**
 *	Clase Modelo
 *	Gestiona los datos de la aplicación.
 */
export class Modelo{
	/**
	 *	Constructor de la clase
	 */
	constructor(){
		this.lista = [] //Array de datos
	}
	/**
	 * Devuelve los datos del modelo.
	 * #return {Array} Datos del modelo
	 */
	getDatos(){
	    return this.lista
	}
}