import { setPuntuacion, getPuntuacion } from "./modelo";

import { gameOver, muestraCarta, muestraPuntuacion } from "./ui";

// se encarga de generar un numero alatorio
const obtenerNumeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

//se encarga de asignar un valor a la carta
const valorCarta = (carta: number): number => {
  return carta > 7 ? 0.5 : carta;
};

// se encarga de generar un valor entero entre (1 -12)
export const generarCartaAleatoria = (): number => {
  const carta = obtenerNumeroAleatorio();
  return carta > 7 ? carta + 2 : carta;
};

// se encarga de modificar la puntuacion y envocar la funcion para mostrar la puntuaccion.
export const sumarPuntos = (carta: number): void => {
  const nuevaPuntuacion = getPuntuacion() + valorCarta(carta);
  setPuntuacion(nuevaPuntuacion);

  muestraPuntuacion(nuevaPuntuacion);
};

// al activar el evento del boton dame carta, inicializa las funciones necesarias a partir de la carta generada automaticamente
export const dameCarta = (): void => {
  const carta = generarCartaAleatoria();

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver();
};
