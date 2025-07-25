import "./style.css";

let puntos: HTMLElement;
let mensaje: HTMLElement;
let imagen: HTMLImageElement;
let botonDameCarta: HTMLButtonElement;
let botonMePlanto: HTMLButtonElement;
let botonNuevaPartida: HTMLButtonElement;
let botonSiguienteCarta: HTMLButtonElement;

let puntuacion: number = 0;

document.addEventListener("DOMContentLoaded", () => {
  puntos = document.getElementById("puntos") as HTMLElement;
  mensaje = document.getElementById("mensaje-despues-tiros") as HTMLElement;
  imagen = document.getElementById("imagen-carta") as HTMLImageElement;
  botonDameCarta = document.getElementById("dame-carta") as HTMLButtonElement;
  botonMePlanto = document.getElementById("me-planto") as HTMLButtonElement;
  botonNuevaPartida = document.getElementById("reiniciar") as HTMLButtonElement;
  botonSiguienteCarta = document.getElementById(
    "como-seria"
  ) as HTMLButtonElement;

  eventos();
  muestraPuntuacion(puntuacion);

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = true;
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.disabled = true;
  }
});

/* ---------------------------------FUNCION PARA GENERAR CARTA ALEATORIA---------------------------------------------- */

const generarCartaAleatoria = () => Math.floor(Math.random() * 10) + 1;

/* ---------------------------------FUNCION PARA MOSTRAR PUNTUACION----------------------------------------------------- */

const muestraPuntuacion = (puntuacion: number): void => {
  if (puntos) {
    puntos.textContent = puntuacion.toString();
  } else {
    console.log("Elemento 'puntos' no encontrado");
  }
};

/* ---------------------------------FUNCION PARA SUMAR PUNTOS. Invoca funcion mostrarPuntuiacion-------------------------- */

const sumarPuntos = (carta: number): void => {
  let valorCarta: number;

  if (carta === 10 || carta === 11 || carta === 12) {
    valorCarta = 0.5;
  } else {
    valorCarta = carta;
  }

  puntuacion += valorCarta;

  muestraPuntuacion(puntuacion);
};

/* ------------------------FUNCION PARA PEDIR CARTAS. Invoca funciones muestraCarta/sumarPuntos /gameOver ------------------------ */

const dameCarta = (): void => {
  let carta = generarCartaAleatoria();

  if (carta > 7) {
    carta += 2;
  }

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver(puntuacion);
};

/* ------------------------------------FUNCION GAME OVER --------------------------------- */

const gameOver = (puntuacion: number): void => {
  if (puntuacion > 7.5) {
    mensaje.textContent = `TE HAS PASADO - GAME OVER`;

    if (botonMePlanto) {
      botonMePlanto.disabled = true;
    }

    if (botonDameCarta) {
      botonDameCarta.disabled = true;
    }

    if (botonNuevaPartida) {
      botonNuevaPartida.disabled = false;
    }
    if (botonSiguienteCarta) {
      botonSiguienteCarta.disabled = true;
    }
  } else if (puntuacion === 7.5) {
    mensaje.textContent = `HAS GANADO !!!!!  - GAME OVER`;

    if (botonMePlanto) {
      botonMePlanto.disabled = true;
    }

    if (botonNuevaPartida) {
      botonNuevaPartida.disabled = false;
    }

    if (botonDameCarta) {
      botonDameCarta.disabled = true;
    }

    if (botonSiguienteCarta) {
      botonSiguienteCarta.disabled = true;
    }
  }
};

/* ------------------------------------FUNCION ME PLANTO----------------------------------- */

const mePlanto = (): void => {
  if (puntuacion < 4) {
    mensaje.textContent = `HAS SIDO MUY CONSERVADOR`;
  } else if (puntuacion === 5) {
    mensaje.textContent = `TE HA ENTRADO EL CAGUELO EH!!!`;
  } else if (puntuacion === 6 || puntuacion === 7) {
    mensaje.textContent = `CASI CASI  EH!!!`;
  } else if (puntuacion === 7.5) {
    mensaje.textContent = `ENHORABUENA - HAS GANADO !!!`;
  }

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = false;
  }

  if (botonDameCarta) {
    botonDameCarta.disabled = true;
  }

  if (botonMePlanto) {
    botonMePlanto.disabled = true;
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.disabled = false;
  }
};

/* -------------------------------------FUNCION NUEVO JUEGO ------------------------------ */

const nuevaPartida = (): void => {
  puntuacion = 0;

  if (imagen) {
    imagen.src = "src/img/back.jpg";
  }

  muestraPuntuacion(puntuacion);
  mensaje.textContent = "";

  if (botonDameCarta) {
    botonDameCarta.disabled = false;
  }

  if (botonMePlanto) {
    botonMePlanto.disabled = false;
  }

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = true;
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.disabled = true;
  }
};

/* -------------------------------------FUNCION SIGUIENTE CARTA ------------------------------ */

const proximaCarta = (): void => {
  let carta = Math.floor(Math.random() * 10) + 1;

  if (carta > 7) {
    carta += 2;
  }

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver(puntuacion);
};

/* -------------------------------------FUNCION MOSTRAR CARTA ----------------------------- */

const muestraCarta = (carta: number): void => {
  if (imagen) {
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
    }
  }
};

/* ----------------------------------FUNCION EVENTOS xra los BOTONES--------------------- */

function eventos() {
  if (botonDameCarta) {
    botonDameCarta.addEventListener("click", dameCarta);
  }

  if (botonMePlanto) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  if (botonNuevaPartida) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.addEventListener("click", proximaCarta);
  }
}
