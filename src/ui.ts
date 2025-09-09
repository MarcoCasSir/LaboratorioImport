import { getPuntuacion, setPuntuacion, puntuacion } from "./modelo";

import {
  jugarCarta,
  obtenerNumeroAleatorio,
  rutaCarta,
  mensajeMePlanto,
} from "./motor";

export const inicioPartida = () => {
  setPuntuacion(0); // definimo la puntuacion a 0
  muestraCarta();
  muestraPuntuacion(puntuacion); // definimo mostrar la puntuacion modificada
  actualizarMensaje("");
  desabilitarBotones("reiniciar", true);
  desabilitarBotones("como-seria", true);
};

// se encarga de actualizar el mensaje
export const actualizarMensaje = (texto: string): void => {
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

// se encarga de cerrar la partida en caso de haber conseguido aertar o haberse pasado de numero
export const gameOver = (): void => {
  const puntuacion = getPuntuacion();
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

// se encarga de actualizar la informacion al reiniciar la pàrtida
export const nuevaPartida = (): void => {
  inicioPartida();

  desabilitarBotones("dame-carta", false);
  desabilitarBotones("me-planto", false);
};

// se encarga de mostrar la carta que se ha generado.
export const muestraCarta = (numeroCarta?: number): void => {
  const imagen = document.getElementById("imagen-carta");
  if (
    imagen !== null &&
    imagen !== undefined &&
    imagen instanceof HTMLImageElement
  ) {
    imagen.src = rutaCarta(numeroCarta);
  } else {
    console.warn("Elemento 'imagen-carta' no encontrado");
  }
};

// se encarga de desabilitar todos los botones.
export const desabilitarBotones = (id: string, disabled: boolean): void => {
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

// se encarga de gestionar lo eventos de los botones.
export const eventos = (): void => {
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

// se encarga de mostrar el mensaje cuando se decide plantarse
const mePlanto = (): void => {
  const puntuacion = getPuntuacion();
  const mensaje = mensajeMePlanto(puntuacion);

  actualizarMensaje(mensaje);

  desabilitarBotones("me-planto", true);
  desabilitarBotones("reiniciar", false);
  desabilitarBotones("dame-carta", true);
  desabilitarBotones("como-seria", false);
};

// se encarga de mostrar la puntuacion
export const muestraPuntuacion = (puntuacion: number): void => {
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

// al activar el evento del boton dame carta, inicializa las funciones necesarias a partir de la carta generada automaticamente
export const dameCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const { numeroCarta, puntuacion } = jugarCarta(numeroAleatorio);

  muestraCarta(numeroCarta);
  muestraPuntuacion(puntuacion);
  gameOver();
};

// se encarga de mostrar las posible situacion si hubieramos continuado el juego
export const proximaCarta = (): void => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const { numeroCarta, puntuacion } = jugarCarta(numeroAleatorio);
  muestraCarta(numeroCarta);
  muestraPuntuacion(puntuacion);
  gameOver();
};
