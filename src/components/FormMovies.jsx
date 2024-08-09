import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { addMoviesG, updateMoviesG } from "../store/slices/movies.slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Confetti from '../utils/Confetti';

const FormMovies = ({ updateInfo, setUpdateInfo, nav, handleNav }) => {
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  

  const dispatch = useDispatch();

  const [showConfetti, setShowConfetti] = useState(true);
  const movies = useSelector((reducer) => reducer.movies);
  

  const genres = [
    "Action",
    "Drama",
    "Romance",
    "Terror",
    "Sci-fi",
    "Anime",
    "Classic",
    "Police",
  ];
  const ratings = [1, 2, 3, 4, 5];

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const generateUniqueId = () => {
    return `movie_${new Date().getTime()}_${Math.floor(Math.random() * 1000)}`;
  };

  const submit = (data) => {
    // console.log(JSON.stringify(data));
    // 
    
    if (data.id) {
      //Update
      dispatch(updateMoviesG({ id: data.id, updatedMovie: data }));
      setUpdateInfo();
    } else {
      //Create
      data.id = generateUniqueId();
      dispatch(addMoviesG(data));
    }

    reset({
      name: "",
      duration: "",
      genre: "",
      director: "",
      release_date: "",
      imageUrl: "",
      premiere: "",
      rating: "",
    });
  };

  // setShowConfetti(showConfetti)

  const getGenreOptions = () => {
    return genres.map((genre, index) => (
      <option key={index} value={genre}>
        {genre}
      </option>
    ));
  };

  const getRatingOptions = () => {
    return ratings.map((rating, index) => (
      <option key={index} value={rating}>
        {`${rating} estrella${rating !== 1 ? "s" : ""}`}
      </option>
    ));
  };

  return (
    <div
      className={`${
        nav ? "left-0" : "left-full sm:-left-96"
      } fixed top-0 z-10 h-full w-full border-r border-r-gray-900 bg-[#00df9a] transition-all duration-300 sm:w-96`}
    >
      <form
        className="border-10 mx-auto mt-10 w-full max-w-60 select-none rounded-3xl border-solid border-gray-200 bg-gray-100 px-4 py-6 shadow-2xl sm:max-w-80"
        onSubmit={handleSubmit(submit)}
      >
        <main className="my-4">
          <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl md:py-6 md:text-4xl">
            Form Movies
          </h2>
          <div
            onClick={handleNav}
            className="absolute right-3 top-1 text-3xl font-bold text-gray-500 hover:scale-105 hover:text-red-600"
          >
            x
          </div>
          <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="w-1/4 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
              {...register("name", { required: true, maxLength: 40 })}
              type="text"
              id="name"
              autoComplete="name"
            />
          </div>
          <small className="text-xs text-red-600 sm:ml-20">
            {errors.name?.type === "required" && "* Name is required"}
            {errors.name?.type === "maxLength" &&
              "* Name entered is more than 40 characters"}
          </small>
          <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="w-1/4 font-semibold" htmlFor="duration">
              Duration
            </label>
            <input
              className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
              {...register("duration", { required: true })}
              type="text"
              id="duration"
            />
          </div>
          <small className="text-xs text-red-600 sm:ml-20">
            {errors.duration?.type === "required" && "* Duration is required"}
          </small>
          <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="w-1/4 font-semibold" htmlFor="genre">
              Genre
            </label>
            <select
              className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
              name="genre"
              id="genre"
              {...register("genre")}
            >
              <option value="">Select genre...</option>
              {getGenreOptions()}
            </select>
            {watch("genre") === "" && (
              <input
                className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
                type="text"
                hidden
                {...register("showGenre", {
                  required: true,
                })}
              />
            )}
          </div>
          <small className="text-xs text-red-600 sm:ml-20">
            {errors.showGenre?.type === "required" && "* Genre is required"}
          </small>
          <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="w-1/4 font-semibold" htmlFor="director">
              Director
            </label>
            <input
              className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
              {...register("director", { required: true })}
              type="text"
              id="director"
            />
          </div>
          <small className="text-xs text-red-600 sm:ml-20">
            {errors.director?.type === "required" && "* Director is required"}
          </small>
          <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="w-1/4 font-semibold" htmlFor="release_date">
              Release
            </label>
            <input
              className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
              {...register("release_date", { required: true })}
              type="date"
              id="release_date"
            />
          </div>
          <small className="text-xs text-red-600 sm:ml-20">
            {errors.release_date?.type === "required" &&
              "* Release Date is required"}
          </small>
          <div className="mt-0.5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="w-1/4 font-semibold" htmlFor="image">
              Image
            </label>
            <input
              className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
              {...register("imageUrl", { required: true })}
              type="text"
              id="image"
            />
          </div>
          <small className="text-xs text-red-600 sm:ml-20">
            {errors.imageUrl?.type === "required" && "* Image URL is required"}
          </small>
          <div className="mt-4 flex flex-row items-center justify-between sm:mt-0.5">
            <input
              className="mr-10 h-6 w-6 border-gray-100 bg-gray-100 accent-emerald-500"
              {...register("premiere")}
              type="checkbox"
              id="premiere"
            />
            <label className="w-3/4 font-semibold" htmlFor="premiere">
              Is it premiere?
            </label>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <label className="w-1/4 font-semibold" htmlFor="rating">
              Rating
            </label>
            <select
              className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
              name="rating"
              id="rating"
              {...register("rating")}
            >
              <option value="">Select rating...</option>
              {getRatingOptions()}
            </select>
            {watch("rating") === "" && (
              <input
                className="w-full rounded-md border-2 border-solid border-gray-300 p-1 outline-0 sm:w-3/4"
                type="text"
                hidden
                {...register("showRating", {
                  required: true,
                })}
              />
            )}
          </div>
          <small className="text-xs text-red-600 sm:ml-20">
            {errors.showRating?.type === "required" && "* Rating is required"}
          </small>
        </main>
        <footer className="flex items-center justify-center">
          <button className="mx-auto my-1 w-[200px] rounded-md bg-[#00df9a] py-3 font-bold shadow-2xl">
            {updateInfo ? "Update movie" : "Add movie"}
          </button>
        </footer>
      </form>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default FormMovies;
