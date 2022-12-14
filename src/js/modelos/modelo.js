/**

 *	@file Contiene el modelo de la web.

 *	@autor Domingo Miño Redondo

 */



/**

 *	Clase Modelo

 *	Gestiona los datos de la aplicación.

 */

export class Modelo{

	/**

	 *	Constructor de la clase

	 */

	constructor(controlador){

		this.controlador = controlador

	}

	/**

	 * Hace una petición GET al servidor para obtener los datos de las canciones que pertenecen a cierta categoría

	 * @param categoria {Number} Número identificativo de la categoría de las canciones

	 */

	getDatosCanciones(categoria) {

		// fetch("js/modelos/cancion.json")

		// fetch("js/modelos/consultarCanciones.php", opciones)

		console.log(categoria)

		fetch("js/modelos/consultarCanciones.php" + "?categoria=" + categoria)
			.then(respuesta => respuesta.json())
			.then(objeto => this.controlador.tratarDatos(objeto))
			// .then(objeto => console.log(objeto))
			.catch(error => console.log("KAPPUT: " + error))

	}

}