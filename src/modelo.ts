export let puntuacion: number = 0;

// recibe una nueva puntuacion y la variable punutacion se modifica
export const setPuntuacion = (nuevaPuntuacion: number): void => {
  puntuacion = nuevaPuntuacion;
};

// ofrece la puntuacion modificada
export const getPuntuacion = (): number => puntuacion;
