/**
 *	@file Contiene la vista de la web
 *	@autor Domingo Miño Redondo
 */

/**
 *	Implementa una vista.
 */
export class Vista{
	/**
	 *	Constructor de la clase
	 */
	constructor(div){
		this.div = div
	}
	/**
	 *	Muestra u oculta el div de los popups.
	 *	@param ver {Boolean} True muestra la vista y false la oculta.
	 */
	mostrar(ver){
		if(ver){
			this.div.style.visibility = 'visible';
			this.div.style.opacity = '1';
		}
		else{
			this.div.style.visibility = 'hidden';
			this.div.style.opacity = '0';
		}
	}
}