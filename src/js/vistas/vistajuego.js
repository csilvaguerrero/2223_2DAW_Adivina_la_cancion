/**
 @file Contiene la vista de la pantalla de juego
 @autor Playbackends
 **/
import {Vista} from './vista.js'

/**
 *	Vista de la pantalla de Juego
 *	Contiene la pantalla en la que se desarrolla el juego
 **/
export class VistaJuego extends Vista {
    /**
     *    Constructor de la clase.
     *    @param div {HtmlDivElement} Div de HTML en el que se desplegará la vista de las puntuaciones de los 3 primeros.
     */
    constructor(controlador, div) {
        super(div)
        this.controlador = controlador

        this.respuesta = null
        this.divDrag = document.getElementById('divdrag2')
        this.divDrop = document.getElementById('divdrag3')
        this.divRespuestas = document.getElementById('divopcion')
        this.cerrar = document.getElementById("salirJuego")

        this.divDrag.addEventListener('dragover', this.permitirDrop.bind(this))
        this.divDrag.addEventListener('drop', this.devolverElemento.bind(this))

        this.divDrop.addEventListener('dragover', this.permitirDrop.bind(this))
        this.divDrop.addEventListener('drop', this.soltarElemento.bind(this))
        this.cerrar.addEventListener('click', this.cerrarJuego.bind(this))

    }

    /**
     *    Constructor de la clase.
     *    @param cancion {Object} Objeto json con la información de las canciones seleccionadas
     */
    mostrarCancion(cancion){
        console.log(cancion)
        // let luchas = cancion.luchas
        let luchas = cancion.luchas.sort(() => {return Math.random() - 0.5})
        // let respuestas = cancion.respuestas
        let respuestas = cancion.respuestas.sort(() => {return Math.random() - 0.5})
        for(let lucha of luchas){
            let span = document.createElement('span')
            span.setAttribute('id', 'lucha' + lucha[0])
            span.setAttribute('draggable', 'true')
            span.classList.add('opciones')
            span.append(document.createTextNode(lucha[1]))
            span.addEventListener('dragstart', this.cogerTemaLucha.bind(this, span))
            this.divDrag.append(span)
        }
        for(let respuesta of respuestas){
            let span = document.createElement('span')
            span.setAttribute('id', respuesta[0])
            span.classList.add('opciones')
            span.append(document.createTextNode(respuesta[1]))
            span.addEventListener('click', this.seleccionarRespuesta.bind(this, span))
            this.divRespuestas.append(span)
        }
    }

    /**
     *    Guarda el id y añade un borde a la respuesta que se ha seleccionado con un click
     *    @param respuesta {HtmlDivElement} Elemento HTML sobre el que se ha hecho click
     */
    seleccionarRespuesta(respuesta){
        for(let i=0;i<this.divRespuestas.children.length;i++){
            this.divRespuestas.children[i].style.border = '2px solid black'
        }
        respuesta.style.border = '2px solid red'
        this.respuesta = respuesta.id
        console.log(this.respuesta)
    }

    /**
     *    Permite coger con el ratón los elementos
     *    @param temaLucha {HtmlDivElement} Elemento HTML al que se le quiere hacer drag
     *    @param evento {Event} Evento al hacer drag sobre un elemento
     */
    cogerTemaLucha(temaLucha, evento){
        console.log(temaLucha)
        evento.dataTransfer.setData('idTemaLucha', temaLucha.id);
    }

    /**
     *    Previene que al soltar el elemento este vuelva a su contenedor de origen
     *    @param evento {Event} Evento que ocurre al soltar el elemento
     */
    permitirDrop(evento){
        evento.preventDefault()
    }

    /**
     *    Permite que el elemento sea devuelto al contenedor de origen
     *    @param evento {Event} Evento que permite que el contenedor aloje devuelta al elemento
     */
    devolverElemento(evento){
        const id = evento.dataTransfer.getData('idTemaLucha')
        const devuelto = document.getElementById(id)
        this.divDrag.appendChild(devuelto)
    }

    /**
     *    Permite que el elemento sea acogido por el contenedor de destino
     *    @param evento {Event} Evento que permite que el contenedor aloje al elemento
     */
    soltarElemento(evento){
        const id = evento.dataTransfer.getData('idTemaLucha')
        const arrastrado = document.getElementById(id)
        console.log(this.divDrop)
        this.divDrop.appendChild(arrastrado)
    }

    /**
     *    Oculta la vista del juego
     */
    cerrarJuego(){
        this.controlador.ocultarVistas()
    }

}