import { useDispatch } from "react-redux";
import { deleteMoviesG } from "../store/slices/movies.slice";
import StartRate from "./shared/StartRate";

const MovieCard = ({ movie, setUpdateInfo, handleNav }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMoviesG(id));
  };

  const handleUpdate = (movie) => {
    setUpdateInfo(movie);
    handleNav();
  };

  return (
    <article className="relative z-0  mb-6 w-full max-w-72 select-none rounded-3xl bg-gray-200 p-4 shadow-md shadow-emerald-400 sm:max-w-80 sm:px-6 sm:py-4">
      {movie.premiere && (
        <span className="tags absolute -left-2 top-8 inline-block whitespace-nowrap bg-no-repeat py-1 pl-8 pr-10 font-thin text-white before:absolute before:-top-2 before:left-0 before:h-0 before:w-0 before:border-4 before:border-b-4 before:border-r-4 before:border-solid before:border-transparent before:border-b-yellow-600 before:border-r-yellow-600">
          In premiere
        </span>
      )}

      <figure className="aspect-square h-40 w-full sm:h-44 sm:w-full">
        <img
          className="mx-auto h-40 w-40 rounded-3xl object-contain sm:h-full sm:w-full"
          src={movie.imageUrl}
          alt=""
        />
      </figure>
      <main>
        <h3 className="my-2 text-center text-lg font-bold">{movie.name}</h3>
        <section className="mb-3 mt-2">
          <StartRate rating={movie.rating} />
          <ul className="mt-4 list-none gap-2 pl-0">
            <li className="mb-1">
              <span className="text-base font-bold">Duration: </span>
              <span>{movie.duration}</span>
            </li>
            <li className="mb-1">
              <span className="text-base font-bold">Genre: </span>
              <span>{movie.genre}</span>
            </li>
            <li className="mb-1">
              <span className="text-base font-bold">Director: </span>
              <span>{movie.director}</span>
            </li>
            <li className="mb-1">
              <span className="text-base font-bold">Release date: </span>
              <span>{movie.release_date}</span>
            </li>
            <li className="my-4 flex">
              <a
                className="ml-auto font-black text-yellow-600 underline hover:text-blue-900 active:text-red-700"
                href="https://www.themoviedb.org/?language=es"
                target="_blank"
              >
                See more details
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="flex items-center justify-evenly gap-4">
        <button
          className="rounded-md bg-[#00df9a] px-4 py-2 text-base font-semibold shadow-xl"
          onClick={() => handleDelete(movie.id)}
        >
          Delete movie
        </button>
        <button
          className="rounded-md bg-[#00df9a] px-2 py-2 text-base font-semibold shadow-xl"
          onClick={() => handleUpdate(movie)}
        >
          Update movie
        </button>
      </footer>
    </article>
  );
};

export default MovieCard;
