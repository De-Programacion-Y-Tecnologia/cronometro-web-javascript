/*
*
*Los nombres de los id y los nombres de las variables y constantes
*así como también los nombres de las funciones se escogen
*arbirtrariamente. Da lo mismo un nombre u otro,
*es meramente con el fin de no perderse, e identificar mas rápido
*donde se encuentra cada cosa
*
*Feliz día, tarde o noche!!!
*/
const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);

const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");
/*
*
*Los tipos de selectores que usen podrán ser diferentes,
*si les gusta mas así (o si lo necesitan por algo puntual).
*En lugar de getElementById("boton1") también hubiera sido válido
*usar querySelector("#boton1")
*
*/

let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;

function dibujarTiempo(){

	spanMinutos.innerHTML = minutos;
	spanSegundos.innerHTML = segundos;
	spanCentesimas.innerHTML = centesimas;

	/*
	*
	*Ojo con que es la propiedad innerHTML lo que debe cambiar
	*y no las referencias a los elementos seleccionados.
	*
	*/
}

function reiniciar(){

	minutos = 0;
	segundos = 0;
	centesimas = 0;
	dibujarTiempo();
}

function accion1(){

	if(corriendo){
		detener();
		boton0.disabled = false; //No deshabilitado.
	}
	else{
		boton0.disabled = true; //Si, deshabilitado!
		iniciar();
	}
}

function iniciar(){

	const sumarMinuto = () => {

		if(minutos < 99) minutos++;
	}

	const sumarSegundo = () => {

		if(segundos === 59){
			segundos = 0;
			sumarMinuto();
		}
		else{
			segundos++;
		}
	}

	const incrementar = () => {

		if(centesimas === 99){
			centesimas = 0;
			sumarSegundo();
		}
		else{
			centesimas++;
		}

		dibujarTiempo();
	}

	corriendo = setInterval(incrementar, 10);
	boton1.innerHTML = "Detener";

	/*
	*
	*setInterval arroja un valor que es un número
	*con el que luego se puede referenciar a ese intervalo
	*(si lo guardo en alguna variable, claro!)
	*
	*/
}

function detener(){

	clearInterval(corriendo);
	corriendo = null;
	boton1.innerHTML = "Iniciar";
}

dibujarTiempo();