import { createSlice } from "@reduxjs/toolkit";

/* la funcion createSlice permite crear, configurar los estados globales*/

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    /* agregamos las acciones o funciones a nuestro slice */
    /* state es el valor actual del estado global */
    /* action.payload es lo que el usuario mando como parametro o argumento */
    /* actions son para cambiar el valor del estado */
    /* [...state, action.payload] es almacenar el valor  ingresado por el usuario al arreglo */
    setMoviesG: (state, action) => action.payload,
    addMoviesG: (state, action) => [...state, action.payload],
    deleteMoviesG: (state, action) =>
      state.filter((movie) => movie.id !== action.payload),
    updateMoviesG: (state, action) => {
      const { id, updatedMovie } = action.payload;
      return state.map((movie) =>
        movie.id === id ? { ...movie, ...updatedMovie } : movie,
      );
    },
  },
});

export const { setMoviesG, addMoviesG, deleteMoviesG, updateMoviesG } =
  moviesSlice.actions;
/* reducer es el representante en el store */
export default moviesSlice.reducer;
