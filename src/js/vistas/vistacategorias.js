/**
	@file Contiene la vista de las categorías del juego
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'

/**
 *	Vista del Juego
 *	Contiene la selcción de categorías
**/
export class VistaCategorias extends Vista{
	/**
	 *	Constructor de la clase
	 *	@param div {HTMLDivElement} Div principal de la vista categorías.
	 *	@param controlador {Controlador} Controlador de la vista.
	 */
	constructor(controlador, div){
		super(div)
		this.controlador = controlador
		this.pulsarJuego = document.getElementsByTagName('button')[2]
		this.pulsarJuego.addEventListener('click', this.juego.bind(this));
		
		this.pulsarCerrar = document.getElementsByClassName('salir')[2]
		this.pulsarCerrar.addEventListener('click', this.cerrar.bind(this));

		this.categoriaSeleccionada= null
		this.divlucha=document.getElementById('luchasRaciales')
		this.divlucha.addEventListener('click', this.pulsarluchas.bind(this));
		this.divlgtb=document.getElementById('lgtbq')
		this.divlgtb.addEventListener('click', this.pulsarlgtb.bind(this));
		this.divfeminismo=document.getElementById('feminismo')
		this.divfeminismo.addEventListener('click', this.pulsarfeminismo.bind(this));

	}


	
	juego(){
		this.controlador.pulsarCategorias();

	}
	
	cerrar(){
		this.controlador.ocultarVistas();
	}

	pulsarluchas(){
		this.controlador.bordelucha();
		this.categoriaSeleccionada= 1;
	}

	pulsarlgtb(){
		this.controlador.bordelgtb();
		this.categoriaSeleccionada= 2;
	}

	pulsarfeminismo(){
		this.controlador.bordefeminismo();
		this.categoriaSeleccionada= 3;
	}
}