window.onload = iniciar();

function iniciar(){


    let agregarRespuesta = document.getElementById('AnadirRespuesta')
    let anadirCancion = document.getElementById('siguiente')

    agregarRespuesta.addEventListener('click', anadirFila)
    anadirCancion.addEventListener('click', comprobarDatos)

}


function anadirFila(evt){

    evt.preventDefault()

    //Declaramos la tabla donde insertaremos los tr
    let tabla = document.getElementById('bodyRespuesta')

    //Inicializamos el valor de la respuesta
    let respuesta = document.getElementById('inputAnadir')

    //Creamos la nueva fila
    let fila = document.createElement('tr')

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

function borrarFila(evt){
    
    evt.target.parentElement.parentElement.remove()
}

function comprobarDatos(evt){

    evt.preventDefault()
    let audio = document.getElementById('inputAudio').value

    if (audio == "")
       window.alert('No has introducido todos los datos, inténtalo de nuevo.')
    else
        window.location.href="canciones_luchas.html"


}