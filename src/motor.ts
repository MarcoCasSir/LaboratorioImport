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
export const sumarPuntos = (numeroCarta: number): number => {
  const nuevaPuntuacion = puntuacion + valorCarta(numeroCarta);
  setPuntuacion(nuevaPuntuacion);
  return nuevaPuntuacion;
};

// se encarga de generar un nuevo numero aleatorio de carta y nuevaPuntuacion
export const jugarCarta = (
  numeroAleatorio: number
): { numeroCarta: number; puntuacion: number } => {
  const numeroCarta = generarCartaAleatoria(numeroAleatorio);
  const puntuacionDespuesJugada = sumarPuntos(numeroCarta);

  return { numeroCarta, puntuacion: puntuacionDespuesJugada };
};

// se encarga de definir las rutas de las imagenes de las cartas.
export const rutaCarta = (numeroCarta?: number): string => {
  if (typeof numeroCarta !== "number") {
    return "src/img/back.jpg";
  }
  switch (numeroCarta) {
    case 1:
      return "src/img/1_as-copas.jpg";

    case 2:
      return "src/img/2_dos-copas.jpg";

    case 3:
      return "src/img/3_tres-copas.jpg";

    case 4:
      return "src/img/4_cuatro-copas.jpg";

    case 5:
      return "src/img/5_cinco-copas.jpg";

    case 6:
      return "src/img/6_seis-copas.jpg";

    case 7:
      return "src/img/7_siete-copas.jpg";

    case 10:
      return "src/img/10_sota-copas.jpg";

    case 11:
      return "src/img/11_caballo-copas.jpg";

    case 12:
      return "src/img/12_rey-copas.jpg";

    default:
      return "src/img/bacl.jpg";
  }
};

// se encarga de mostra el mensaje con el comando de mePlanto
export const mensajeMePlanto = (puntuacion: number): string => {
  if (puntuacion < 4) {
    return `HAS SIDO MUY CONSERVADOR`;
  } else if (puntuacion === 5) {
    return `TE HA ENTRADO EL CAGUELO EH!!!`;
  } else if (puntuacion === 6 || puntuacion === 7) {
    return `CASI CASI  EH!!!`;
  } else if (puntuacion === 7.5) {
    return `ENHORABUENA - HAS GANADO !!!`;
  }

  return "";
};
