import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/movies.slice";

/* el archivo index.js es la store */
/* store almacenar los estados globales*/
/* la funcion configureStore permite configurar la store */
/* la funcion reducer permite guardar los estados globales */

export default configureStore({
  reducer: {
    movies,
  },
});
