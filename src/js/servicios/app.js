/**
 *	@file Contiene el controlador principal de la web.
 *	@autor Domingo Miño Redondo
 */
import{Modelo} from './../modelos/modelo.js'
import{VistaInicio} from './../vistas/vistainicio.js'
import{VistaInstrucciones} from './../vistas/vistainstrucciones.js'
import{VistaPuntos} from './../vistas/vistapuntos.js'
import{VistaCategorias} from './../vistas/vistacategorias.js'
import{VistaJuego} from './../vistas/vistajuego.js'
/**
 * Controlador de la aplicación
 */
class Controlador{
	/**
	 *	Constructor de la clase
	 *	Llama al método iniciar al cargarse la página
	 */
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	/**
	 *	Inicia la aplicación
	 *	Crea el modelo y las vistas.
	 */
	iniciar(){
		this.modelo = new Modelo()
		
		this.divInicio = document.getElementById('inicio')
		this.divInstrucciones = document.getElementById('instrucciones')
		this.divPuntos = document.getElementById('puntos')
		this.divCategorias = document.getElementById('categorias')
		this.divJuego = document.getElementById('juego')
		
		this.divInicio = new VistaInicio(this, this.divInicio)
		this.divInstrucciones = new VistaInstrucciones(this, this.divInstrucciones)
		this.divPuntos = new VistaPuntos(this, this.divPuntos)
		this.divCategorias = new VistaCategorias(this, this.divCategorias)
		this.divJuego = new VistaJuego(this, this.divJuego)
		
		this.divInicio.mostrar(true)
		
	}
	/**
	 *	Oculta todas las vistas menos iniciar.
	 */
	ocultarVistas(){
	    this.divInstrucciones.mostrar(false)
	    this.divPuntos.mostrar(false)
	    this.divCategorias.mostrar(false)
		this.divJuego.mostrar(false)
	}
	/**
	 *	Atención a la pulsación del boton de instrucciones.
	 */
	pulsarInstrucciones(){
		this.ocultarVistas()
		this.divInstrucciones.mostrar(true)
	}
	/**
	 *	Atención a la pulsación del boton de puntos.
	 */
	pulsarPuntos(){
		this.ocultarVistas()
		this.divPuntos.mostrar(true)
	}
	/**
	 *	Atención a la pulsación del boton de elegir categorías.
	 */
	pulsarCategorias(){
		this.ocultarVistas()
		this.divCategorias.mostrar(true)
	}

	pulsarJuego(){
		this.ocultarVistas()
		this.divJuego.mostrar(true)
		fetch("../../js/modelos/cancion.json")
			.then(respuesta => respuesta.json())
			.then(objeto => this.elegirCancion(objeto))
			.catch(error => console.log("KAPPUT: " + error))
	}

	elegirCancion(objeto){
		let canciones = objeto.canciones
		let idCanciones = new Set()
		for(let cancion of canciones){
			idCanciones.add(cancion.id)
		}
		let eleccion = Math.floor(Math.random() * idCanciones.size)
		this.divJuego.mostrarCancion(canciones[eleccion])
	}

	
	/**
	 * Devuelve el modelo de la aplicación.
	 * @return {Modelo} El modelo de la aplicación.
	 */
	getModelo(){
		return this.modelo
	}
	
}

const app = new Controlador()