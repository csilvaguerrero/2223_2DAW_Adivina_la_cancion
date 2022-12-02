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
		this.modelo = new Modelo(this)
		
		this.divInicio = document.getElementById('inicio')
		this.divInstrucciones = document.getElementById('instrucciones')
		this.divPuntos = document.getElementById('puntos')
		this.divCategorias = document.getElementById('categorias')
		this.divJuego = document.getElementById('juego')
		this.divlucha=document.getElementById('luchasRaciales')
		this.divlgtb=document.getElementById('lgtbq')
		this.divfeminismo=document.getElementById('feminismo')
	
		
		
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
	ocultarborde(){
		this.divfeminismo.borde(false)
		this.divlucha.borde(false)
		this.divlgtb.borde(false)
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

	/**
	 *  Llama al modelo para hacer la consulta con la categoría seleccionada
	 * @param categoria {Number} Número identificativo de la categoría escogida por el usuario
	 */
	pulsarJuego(categoria){
		this.modelo.getDatosCanciones(categoria)
	}

	/**
	 * 	Manipula los datos devueltos del modelo para que sean más fáciles de utilizar en el juego
	 * @param objetos {JSON} Coleccion de datos con las filas devueltas por la base de datos
	 */
	tratarDatos(objetos){
		console.log(objetos)
		let datosCanciones = {}
		datosCanciones.id = new Set()
		datosCanciones.audio = new Set()
		datosCanciones.respuesta_correcta = new Set()
		for(let objeto of objetos){
			datosCanciones.id.add(objeto.id)
			datosCanciones.audio.add(objeto.audio)
			datosCanciones.respuesta_correcta.add(objeto.respuesta_correcta)
		}
		datosCanciones.id = [... datosCanciones.id]
		datosCanciones.audio = [... datosCanciones.audio]
		datosCanciones.respuesta_correcta = [... datosCanciones.respuesta_correcta]

		let canciones = []
		for(let i=0;i<datosCanciones.id.length;i++){
			canciones[i] = {}
			canciones[i].id = datosCanciones.id[i]
			canciones[i].audio = datosCanciones.audio[i]
			canciones[i].respuesta_correcta = datosCanciones.respuesta_correcta[i]
			canciones[i].luchas = [[1, "Identidad de Género"], [2, "Discriminación"], [3, "Maltrato contra la mujer"]]
			canciones[i].respuestas = []
		}

		console.log(canciones)

		for(let i=0;i<objetos.length;i++){
			for(let j=0;j<canciones.length;j++){
				if(objetos[i].id==canciones[j].id){
					let respuesta = []
					respuesta.push(objetos[i].num_respuesta)
					respuesta.push(objetos[i].titulo)
					canciones[j].respuestas.push(respuesta)
				}
			}
		}

		this.elegirCancion(canciones)

	}

	/**
	 *	Elige una de las canciones al azar
	 * @param canciones {Array} Colección de canciones de la misma categoría
	 */
	elegirCancion(canciones){
		if(canciones.length>0){
			this.ocultarVistas()
			this.divJuego.mostrar(true)
			let eleccion = Math.floor(Math.random() * canciones.length)
			this.divJuego.mostrarCancion(canciones[eleccion])
		}else{
			window.alert('Esta categoría no tiene canciones')
		}
	}

	/**
	 *	Atención a la pulsación de la imagen de luchas sociales(se añade borde).
	 */
	bordelucha(){
		this.ocultarborde()
		this.divlucha.borde(true)
		
	}
	/**
	 *	Atención a la pulsación de la imagen de lgtb(se añade borde).
	 */
	bordelgtb(){		
		this.ocultarborde()
		this.divlgtb.borde(true)
		
	}
	/**
	 *	Atención a la pulsación de la imagen de feminismo(se añade borde).
	 */
	bordefeminismo(){
		this.ocultarborde()
		this.divfeminismo.borde(true)
		
	}
}

function validar() {
    // Obtener nombre de archivo
    let archivo = document.getElementById('inputAudio').value,
    // Obtener extensión del archivo
        extension = archivo.substring(archivo.lastIndexOf('.'),archivo.length);
    // Si la extensión obtenida no está incluida en la lista de valores
    // del atributo "accept", mostrar un error.
    if(document.getElementById('inputAudio').getAttribute('accept').split(',').indexOf(extension) < 0) {
      alert('Archivo invalido. No se permite la extension ' + extension);
    }
  }
const app = new Controlador()