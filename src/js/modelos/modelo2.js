/**
	@file Contiene el modelo de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/
/**
	Clase Modelo
	Gestiona los datos de la aplicación.
**/
export class Modelo2{
	/**
		Constructor de la clase
	**/
	constructor(){
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
	}
	/**
	 * Registra un objeto para informarle de los cambios en el Modelo
	 * @param {Function} Función de callback que será llamada cuando cambien los datos
	 **/
	registrar(callback){
        	this.callbacks.push(callback)
	}
	/**
	 * Ejecuta todos los callback registrados.
	 **/
	 avisar(){
	     for(let callback of this.callbacks)
	        callback()
	 }
	/**
		Inserta un nuevo registro.
		@param nombre {String} Atributo nombre del nuevo registro
		@param email {String} Atributo email del nuevo registro
	**/
	insertar(nombre){
		this.lista.push({'nombre': nombre})
		this.avisar()
	}
	/**
		Elimina un registro.
		@param dato {Object} Dato a eliminar
	**/
	borrar(dato){
		for(let i=0; i<= this.lista.length; i++)
			if (dato == this.lista[i]) 
				this.lista.splice(i,1)
		this.avisar()
	}
	/**
	 * Devuelve los datos del modelo.
	 * En este modelo tan simple, es fácil. En proyectos más complejos, será más elaborado
	 * #return {Array} Datos del modelo
	 **/
	 getDatos(){
	     return this.lista
	 }
	}