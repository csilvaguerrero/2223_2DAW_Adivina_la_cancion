window.onload = iniciar();

function iniciar(){

    //Formulario categorias
    let nombre = document.getElementById('nombre-categoria')
    nombre.addEventListener('blur', validarNombre)

    let descripcion = document.getElementById('descripcion-categoria')
    descripcion.addEventListener('blur', validarDescripcion)

    let anadirCategoria = document.getElementById('anadir-temas')  
    anadirCategoria.addEventListener('click', formularioCategorias)  

    let enviarDatos = document.getElementById('anadir-categoria')
    enviarDatos.addEventListener('click', validarFormulario)

}

function validarFormulario(){

    let imagen = document.getElementById('inputImagen').value
    let nombre = document.getElementById('nombre-categoria').value
    let descripcion = document.getElementById('descripcion-categoria').value

    let advertenciaFormulario = document.getElementById('advertenciaFormulario')
    advertenciaFormulario.style.color = "yellow"

    if (imagen == "" || nombre == "" || descripcion == ""){
       advertenciaFormulario.removeAttribute('hidden')
    }
    else{
        advertenciaFormulario.textContent = ""
        let divAnadirCanciones = document.getElementById('divAnadirCanciones')
        let divCorrecto = document.createElement('div')
        let correcto = document.createElement('h2')
        correcto.textContent = "Categoría creada con éxito."
        correcto.style.color = "yellow"
        divCorrecto.appendChild(correcto)
        divAnadirCanciones.appendChild(divCorrecto)
    }
    
}

function validarNombre(){

    //Declaro el nombre
    let nombre = document.getElementById('nombre-categoria').value

    let advertenciaNombre = document.getElementById('advertenciaNombre')
    advertenciaNombre.style.color = "yellow"

     //Creacion de la expresion regular
     let expresion = /^[A-Z][a-z]+/

     //Comprobamos el dato
     let comprobarNombre = nombre.match(expresion)
    
    //Validaciones
    if (nombre == ""){
        advertenciaNombre.removeAttribute('hidden')
        advertenciaNombre.textContent = "No has introducido ningún nombre."
    } 
    else if (comprobarNombre == null){
        advertenciaNombre.removeAttribute('hidden')
        advertenciaNombre.textContent = "El nombre no cumple los requerimientos."
    }
    else{
        advertenciaNombre.textContent = ""
    }  
}

function validarDescripcion(){

    //Declaramos la descripcion
    let descripcion = document.getElementById('descripcion-categoria').value
    let advertenciaDescripcion = document.getElementById('advertenciaDescripcion')

    //Comprobaciones
    if (descripcion == ""){
        advertenciaDescripcion.removeAttribute('hidden')
        advertenciaDescripcion.textContent = "No has introducido texto descriptivo."
        advertenciaDescripcion.style.color = "yellow"
    }
    else{
        advertenciaDescripcion.textContent = ""
    }
}



function borrarCategoria(evt){

    //Capturamos el evento y usando parentElement borramos al padre del botón borrar.
    evt.target.parentElement.parentElement.remove()
}

function formularioCategorias(evt){
   
    evt.preventDefault()
    
    let temaLucha = document.getElementById('categoria-tema')
    let advertenciaTema = document.getElementById('advertenciaTema')
    advertenciaTema.style.color = "yellow"

    if (temaLucha.value == ""){
        advertenciaTema.removeAttribute('hidden')
    }
    else{

        advertenciaTema.setAttribute("hidden", true)
        let tablaCategorias = document.getElementById('tablaCategorias')

        //Creacion de elementos
        let fila = document.createElement('tr')

        let celdaLucha = document.createElement('td')
        let celdaBoton = document.createElement('td')

        let boton = document.createElement('button')

        //Añadimos class al botón añadido en una de las celdas
        boton.classList.add('anadirRespuestas')

        //Llamada a la funcion borrar fila
        boton.addEventListener('click', borrarCategoria)

        //Asignación de contenido dentro de las celdas
        boton.textContent = "-"
        celdaLucha.textContent = temaLucha.value

        //Vaciamos el input en el que escribimos el tema de lucha
        temaLucha.value = ""
        
        //Agregamos los nuevos elementos a la tabla  
        celdaBoton.appendChild(boton)

        fila.appendChild(celdaLucha)
        fila.appendChild(celdaBoton)

        tablaCategorias.appendChild(fila)
    }
}
