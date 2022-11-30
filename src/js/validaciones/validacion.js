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