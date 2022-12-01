/**
	@file Contiene la vista del CRUD de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

import {Vista2} from './vista2.js'

/**
	Vista del CRUD
	Contiene el formulario de inserción y la tabla de listado.
**/
export class VistaRespuesta extends Vista2{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador

		//Hacemos que la VistaRespuesta "observe" al Modelo
		this.modelo2 = this.controlador.getModelo2()
		this.modelo2.registrar(this.actualizar.bind(this))

		//Cojo referencias a los elementos del interfaz
		this.iNombre = this.div.getElementsByTagName('input')[0]
		
		
		this.btnAceptar = this.div.getElementsByTagName('button')[0]
		
		this.tabla = this.div.getElementsByTagName('tbody')[0]

		//Asigno Eventos
		this.btnAceptar.onclick = this.aceptar.bind(this)
	}
	/**
		Atención al click sobre el botón Aceptar de la vista.
	**/
	aceptar(){
		//Validar los campos
		
		//Llamar al Controlador
		this.controlador.aceptarCRUD(this.iNombre.value)
	}
	/**
	 * Recibe el aviso del modelo cuando ha sido actualizado.
	 * Actualiza los datos de la vista.
	 **/
	actualizar(){
		
	    this.borrarTabla()
	    for(let dato of this.modelo2.getDatos()){
	        let tr = document.createElement('tr')
	        this.tabla.appendChild(tr)
	        let td1 = document.createElement('td')
	        tr.appendChild(td1)
	        td1.innerHTML = '<input type="radio" name="respuesta"/>'
	        let td2 = document.createElement('td')
	        tr.appendChild(td2)
	        td2.textContent = dato.nombre
	        let td3 = document.createElement('td')
	        tr.appendChild(td3)
            	let spanEliminar = document.createElement('span')
            	td3.appendChild(spanEliminar)
            	spanEliminar.classList.add('icono')
            	spanEliminar.innerHTML = '<button class="botonform">-</button>'
		spanEliminar.onclick = this.eliminar.bind(this, dato)
        
       		}
	}
	/**
	 * Borra las filas de la tabla
	 */
	 borrarTabla(){
	     while (this.tabla.firstElementChild)
	        this.tabla.firstElementChild.remove()
	 }
	/**
		Atención al evento eliminar de una fila.
		@param dato {Object} Dato contenido en la fila
	**/
	eliminar(dato){
		//Llamada al controlador
		this.controlador.eliminarCRUD(dato)
	}

}
