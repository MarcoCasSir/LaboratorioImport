import { puntuacion, setPuntuacion } from "./modelo";

// se encarga de generar un numero alatorio
export const obtenerNumeroAleatorio = (): number =>
  Math.floor(Math.random() * 10) + 1;

//se encarga de asignar un valor a la carta
const valorCarta = (numeroAleatorio: number): number => {
  return numeroAleatorio > 7 ? 0.5 : numeroAleatorio;
};

// se encarga de generar un valor entero entre (1 -12)
export const generarCartaAleatoria = (numeroAleatorio: number): number => {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
};

// se encarga de modificar la puntuacion y envocar la funcion para mostrar la puntuaccion.
export const sumarPuntos = (numeroAleatorio: number): number => {
  const nuevaPuntuacion = valorCarta(numeroAleatorio) + puntuacion;
  setPuntuacion(nuevaPuntuacion);

  return nuevaPuntuacion;
};

export const jugarCarta = (): { numeroCarta: number; puntuacion: number } => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const numeroCarta = generarCartaAleatoria(numeroAleatorio);
  const puntuacionDespuesJugada = sumarPuntos(numeroAleatorio);

  return { numeroCarta, puntuacion: puntuacionDespuesJugada };
};
