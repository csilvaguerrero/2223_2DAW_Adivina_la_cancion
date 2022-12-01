/**
	@file Contiene el modelo de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

/**
	Implementa una vista.
	Debería ser abstracta.
**/
export class Vista2{
	/**
		Constructor de la clase
	**/
	constructor(div){
		this.div = div
	}
	/**
		Muestra u oculta el div principal de la vista.
		@param ver {Boolean} True muestra la vista y false la oculta.
	**/
	mostrar(ver){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
}
