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
    
    if (imagen == ""){
        window.alert("Has introducido mal los datos, vuelve a intentarlo.")
    }
    else{
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

     //Creacion de la expresion regular
     let expresion = /^[A-Z][a-z]+/

     //Comprobamos el dato
     let comprobarNombre = nombre.match(expresion)

    //Limitacion de la base de datos
    let tamanioNombre = 20

    //Validaciones

    if (nombre.length > tamanioNombre){
        window.alert('El tamaño del campo nombre ha superado el máximo de caracteres: '+tamanioNombre)
    }
    else if (nombre == ""){
        window.alert('No has insertado ningún nombre, vuelva a intentarlo.')
    }
    else if (comprobarNombre == null){
        console.log('No cumple con la expresion regular.')
    }
    else{
        console.log('true')
    }  
}

function validarDescripcion(){

    //Declaramos la descripcion
    let descripcion = document.getElementById('descripcion-categoria').value

    //Tamaño de la descripcion en la base de datos
    let tamanioDescripcion = 500

    //Comprobaciones
    if (descripcion.length > tamanioDescripcion)
        window.alert('El tamaño del campo descripcion ha superado el máximo de caracteres: '+tamanioDescripcion)
    else if (descripcion == "")
        window.alert('No has añadido ninguna descripción, vuelva a intentarlo')
    else
        console.log('descripcion correcta')

}



function borrarCategoria(evt){

    //Capturamos el evento y usando parentElement borramos al padre del botón borrar.
    evt.target.parentElement.parentElement.remove()
}

function formularioCategorias(evt){
   
    evt.preventDefault()
    //Declaración de variables

    let temaLucha = document.getElementById('categoria-tema')
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
