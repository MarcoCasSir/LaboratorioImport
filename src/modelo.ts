export let puntuacion: number = 0;

// recibe una nueva puntuacion y la variable punutacion se modifica
export const setPuntuacion = (nuevaPuntuacion: number): void => {
  puntuacion = nuevaPuntuacion;
};

// ofrece la puntuacion modificada
export const getPuntuacion = (): number => puntuacion;

/*export interface Partida {
  puntuacion: number;
  estado: "jugando" | "ganado" | "perdido" | "plantado";
}

export const crearPartida = (): Partida => ({
  puntuacion: 0,  
  estado: "jugando",
});*/
