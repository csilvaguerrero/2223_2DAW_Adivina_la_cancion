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
		this.pulsarComenzarJuego = document.getElementById('comenzarJuego')
		this.pulsarJuego.addEventListener('click', this.juego.bind(this));
		this.pulsarComenzarJuego.addEventListener('click', this.comenzarJuego.bind(this))

		this.pulsarCerrar = document.getElementsByClassName('salir')[2]
		this.pulsarCerrar.addEventListener('click', this.cerrar.bind(this));

		this.categoriaSeleccionada = null
		this.divlucha=document.getElementById('luchasRaciales')
		this.divlucha.addEventListener('click', this.pulsarluchas.bind(this));
		this.divlgtb=document.getElementById('lgtbq')
		this.divlgtb.addEventListener('click', this.pulsarlgtb.bind(this));
		this.divfeminismo=document.getElementById('feminismo')
		this.divfeminismo.addEventListener('click', this.pulsarfeminismo.bind(this));

	}

	ocultarborde(){
		this.divfeminismo.style.border = 'none'
		this.divlucha.style.border = 'none'
		this.divlgtb.style.border = 'none'
	}

	juego(){
		this.controlador.pulsarCategorias();

	}
	
	cerrar(){
		this.controlador.ocultarVistas();
	}

	comenzarJuego(){
		if(this.categoriaSeleccionada != null){
			this.controlador.pulsarJuego(this.categoriaSeleccionada);
		}
	}

	pulsarluchas(){
		this.ocultarborde()
		this.divlucha.style.border = '2px solid red'
		// this.controlador.bordelucha();
		this.categoriaSeleccionada = 1;
	}

	pulsarlgtb(){
		this.ocultarborde()
		this.divlgtb.style.border = '2px solid red'
		// this.controlador.bordelgtb();
		this.categoriaSeleccionada = 3;
	}

	pulsarfeminismo(){
		this.ocultarborde()
		this.divfeminismo.style.border = '2px solid red'
		// this.controlador.bordefeminismo();
		this.categoriaSeleccionada = 2;
	}
}