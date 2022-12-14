window.onload = iniciar();

function iniciar(){


    let agregarRespuesta = document.getElementById('AnadirRespuesta')
    let anadirCancion = document.getElementById('siguiente')

    agregarRespuesta.addEventListener('click', anadirFila)
    anadirCancion.addEventListener('click', comprobarDatos)
    
}


function anadirFila(evt){

    evt.preventDefault()

    let advertenciaRespuesta = document.getElementById('anadirRespuestas')

    //Declaramos la tabla donde insertaremos los tr
    let tabla = document.getElementById('bodyRespuesta')

    //Obtenemos el valor de la respuesta introducido en el input
    let respuesta = document.getElementById('inputAnadir')

    if (respuesta.value == ""){
        advertenciaRespuesta.removeAttribute('hidden')
        advertenciaRespuesta.style.color = "yellow"
        advertenciaRespuesta.textContent = 'No has introducido ninguna respuesta.'
    }
    else{
    //Creamos la nueva fila
    let fila = document.createElement('tr')
    advertenciaRespuesta.textContent = ""

    //Creamos el radiobutton que indicara la respuesta correcta
    let radio = document.createElement('input')
    radio.setAttribute("type", "radio")

    //Creamos las celdas de la nueva fila
    let celdaRadio = document.createElement('td')
    let celdaRespuesta = document.createElement('td')
    let celdaBoton = document.createElement('td')

    //Boton para borrar su respectiva fila
    let boton = document.createElement('button')
    boton.addEventListener('click', borrarFila)
    boton.textContent = "-"
    boton.classList.add('anadirRespuestas')

    celdaRespuesta.textContent = respuesta.value
    respuesta.value = ""

    celdaRadio.appendChild(radio)
    celdaBoton.appendChild(boton)

    fila.appendChild(celdaRadio)
    fila.appendChild(celdaRespuesta)
    fila.appendChild(celdaBoton)

    tabla.appendChild(fila)
    }
}

function borrarFila(evt){
    
    evt.target.parentElement.parentElement.remove()
}

function comprobarDatos(evt){

    evt.preventDefault()
    let audio = document.getElementById('inputAudio').value

    let comprobarDatos = document.getElementById('comprobarDatos')

    if (audio == ""){
        comprobarDatos.removeAttribute('hidden')
        comprobarDatos.style.color = "yellow"
    }
    else{
        comprobarDatos.setAttribute("hidden", true)
    }


}