import "./style.css";

let puntuacion: number = 0;

document.addEventListener("DOMContentLoaded", () => {
  inicioPartida();
});

const inicioPartida = () => {
  puntuacion = 0;

  muestraCarta();
  muestraPuntuacion(puntuacion);
  actualizarMensaje("");

  desabilitarBotones("reiniciar", true);
  desabilitarBotones("como-seria", true);

  eventos();
};

// se encarga de generar un numero alatorio y dar un valor entero entre (1 -12)
const generarCartaAleatoria = (): number => {
  let carta = Math.floor(Math.random() * 10) + 1;

  return carta > 7 ? carta + 2 : carta;
};

//se encarga de asignar un valor a la carta
const valorCarta = (carta: number): number => {
  return carta > 7 ? 0.5 : carta;
};

// se encarga de modificar la puntuacion y envocar la funcion para mostrar la puntuaccion.
const sumarPuntos = (carta: number): void => {
  puntuacion += valorCarta(carta);
  muestraPuntuacion(puntuacion);
};

// se encarga de actualizar el mensaje
const actualizarMensaje = (texto: string): void => {
  const mensaje = document.getElementById("mensaje-despues-tiros");
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLElement
  ) {
    mensaje.textContent = texto;
  } else {
    console.log(" El elemento mensaje no existe o no es un elemento HTML");
  }
};

// se encarga de cerrar la partida en caso de hacer conseguido aertar o haberse pasado de numero
const gameOver = (): void => {
  if (puntuacion > 7.5) {
    actualizarMensaje(`TE HAS PASADO - GAME OVER`);

    desabilitarBotones("dame-carta", true);
    desabilitarBotones("me-planto", true);
    desabilitarBotones("reiniciar", false);
    desabilitarBotones("como-seria", true);
  } else {
    if (puntuacion === 7.5) {
      actualizarMensaje(`HAS GANADO !!!!!  - GAME OVER`);

      desabilitarBotones("dame-carta", true);
      desabilitarBotones("me-planto", true);
      desabilitarBotones("reiniciar", false);
      desabilitarBotones("como-seria", true);
    }
  }
};

// al activar el evento del boton dame carta, inicializa las funciones necesarias a partir de la carta generada automaticamente
const dameCarta = (): void => {
  const carta = generarCartaAleatoria();

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver();
};

// se encarga de mostrar la puntuacion
const muestraPuntuacion = (puntuacion: number): void => {
  const puntos = document.getElementById("puntos");

  if (
    puntos !== null &&
    puntos !== undefined &&
    puntos instanceof HTMLElement
  ) {
    puntos.textContent = puntuacion.toString();
  } else {
    console.log("Elemento 'puntos' no encontrado ");
  }
};

// se encarga de mostrar el mensaje cuando se decide plantarse
const mePlanto = (): void => {
  if (puntuacion < 4) {
    actualizarMensaje(`HAS SIDO MUY CONSERVADOR`);
  } else if (puntuacion === 5) {
    actualizarMensaje(`TE HA ENTRADO EL CAGUELO EH!!!`);
  } else if (puntuacion === 6 || puntuacion === 7) {
    actualizarMensaje(`CASI CASI  EH!!!`);
  } else if (puntuacion === 7.5) {
    actualizarMensaje(`ENHORABUENA - HAS GANADO !!!`);
  }

  desabilitarBotones("me-planto", true);
  desabilitarBotones("reiniciar", false);
  desabilitarBotones("dame-carta", true);
  desabilitarBotones("como-seria", false);
};

// se encarga de actualizar la informacion al reiniciar la pàrtida
const nuevaPartida = (): void => {
  inicioPartida();

  actualizarMensaje("");

  desabilitarBotones("dame-carta", false);
  desabilitarBotones("me-planto", false);
};

// se encarga de mostrar las posible situacion se hubieramos continuado el juego
const proximaCarta = (): void => {
  let carta = generarCartaAleatoria();

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver();
};

// se encarga de mostrar la carta que se ha generado.
const muestraCarta = (carta?: number): void => {
  const imagen = document.getElementById("imagen-carta");
  if (
    imagen !== null &&
    imagen !== undefined &&
    imagen instanceof HTMLImageElement
  ) {
    if (typeof carta === "number") {
      switch (carta) {
        case 1:
          imagen.src = "src/img/1_as-copas.jpg";
          break;
        case 2:
          imagen.src = "src/img/2_dos-copas.jpg";
          break;
        case 3:
          imagen.src = "src/img/3_tres-copas.jpg";
          break;
        case 4:
          imagen.src = "src/img/4_cuatro-copas.jpg";
          break;
        case 5:
          imagen.src = "src/img/5_cinco-copas.jpg";
          break;
        case 6:
          imagen.src = "src/img/6_seis-copas.jpg";
          break;
        case 7:
          imagen.src = "src/img/7_siete-copas.jpg";
          break;
        case 10:
          imagen.src = "src/img/10_sota-copas.jpg";
          break;
        case 11:
          imagen.src = "src/img/11_caballo-copas.jpg";
          break;
        case 12:
          imagen.src = "src/img/12_rey-copas.jpg";
          break;
        default:
          imagen.src = "src/img/bacl.jpg";
      }
    } else {
      imagen.src = "src/img/back.jpg";
    }
  }
};

// se encarga de desabilitar todos los botones.
const desabilitarBotones = (id: string, disabled: boolean): void => {
  const button = document.getElementById(id);

  if (
    button !== null &&
    button !== undefined &&
    button instanceof HTMLButtonElement
  ) {
    button.disabled = disabled;
  } else {
    console.error(`El elemento con id "${id}" no existe o no es un botón.`);
  }
};

// se encarga de gestionar lso eventos de los botones.
const eventos = (): void => {
  const botonDameCarta = document.getElementById("dame-carta");
  const botonMePlanto = document.getElementById("me-planto");
  const botonNuevaPartida = document.getElementById("reiniciar");
  const botonSiguienteCarta = document.getElementById("como-seria");

  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonDameCarta.addEventListener("click", dameCarta);
  }

  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  }

  if (
    botonSiguienteCarta !== null &&
    botonSiguienteCarta !== undefined &&
    botonSiguienteCarta instanceof HTMLButtonElement
  ) {
    botonSiguienteCarta.addEventListener("click", proximaCarta);
  }
};
