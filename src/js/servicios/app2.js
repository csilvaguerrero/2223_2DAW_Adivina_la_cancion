/**
	@file Contiene el controlador principal de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/
import {Modelo2} from '../modelos/modelo2.js'



import {VistaRespuesta} from '../vistas/vistarespuesta.js'

/**
 * Controlador de la aplicación
 */
class Controlador{
	/**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	/**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
	iniciar(){
		this.modelo2 = new Modelo2()

	
		
		this.divRespuesta = document.getElementById('divRespuesta')
		this.VistaRespuesta = new VistaRespuesta(this.divRespuesta, this)

		this.VistaRespuesta.mostrar(true)
	}

	
	
	/**
		Atención al click en el botón Aceptar del CRUD.
		Inserta el elemento en el modelo.
		@param nombre {String} Nombre del elemento a registrar
	**/
	aceptarCRUD(nombre){
		this.modelo2.insertar(nombre )
	}
	/**
		Atención al click en el icono eliminar del CRUD.
		Elimina el elemento en el modelo.
		@param dato {Object} Dato a eliminar
	**/
	eliminarCRUD(dato){
		this.modelo2.borrar(dato)
	}
	/**
	 * Devuelve el modelo de la aplicación
	 * @return {Modelo2} El modelo de la aplicación
	 **/
	getModelo2(){
		return this.modelo2
	}
}

const app2 = new Controlador()
