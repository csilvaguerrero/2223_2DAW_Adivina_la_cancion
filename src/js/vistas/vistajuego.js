import {Vista} from './vista.js'

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

        this.divDrag.addEventListener('dragover', this.permitirDrop.bind(this))
        this.divDrag.addEventListener('drop', this.devolverElemento.bind(this))

        this.divDrop.addEventListener('dragover', this.permitirDrop.bind(this))
        this.divDrop.addEventListener('drop', this.soltarElemento.bind(this))

    }

    mostrarCancion(cancion){
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

    seleccionarRespuesta(respuesta){
        for(let i=0;i<this.divRespuestas.children.length;i++){
            this.divRespuestas.children[i].style.border = '2px solid black'
        }
        respuesta.style.border = '2px solid red'
        this.respuesta = respuesta.id
        console.log(this.respuesta)
    }

    cogerTemaLucha(temaLucha, evento){
        console.log(temaLucha)
        evento.dataTransfer.setData('idTemaLucha', temaLucha.id);
    }

    permitirDrop(evento){
        evento.preventDefault()
    }

    devolverElemento(evento){
        const id = evento.dataTransfer.getData('idTemaLucha')
        const devuelto = document.getElementById(id)
        this.divDrag.appendChild(devuelto)
    }

    soltarElemento(evento){
        const id = evento.dataTransfer.getData('idTemaLucha')
        const arrastrado = document.getElementById(id)
        console.log(this.divDrop)
        this.divDrop.appendChild(arrastrado)
    }

}