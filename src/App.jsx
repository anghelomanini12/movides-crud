import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "./components/shared/Navbar";
import FormMovies from "./components/FormMovies";
import MovieCard from "./components/MovieCard";
import useMediaQuery from "./hooks/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movieroll from "./assets/movieroll.svg";

function App() {
  const movies = useSelector((reducer) => reducer.movies);

  const [nav, setNav] = useState(false);
  const [updateInfo, setUpdateInfo] = useState();

  const handleNav = () => setNav(!nav);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 1500,
    // autoplaySpeed: 1500,
    initialSlide: 0,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isLargerThan480 = useMediaQuery("(min-width: 480px)");

  const movieCards = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      setUpdateInfo={setUpdateInfo}
      handleNav={handleNav}
    />
  ));

  return (
    <div className="relative mx-6 my-8 min-h-screen select-none">
      <Navbar handleNav={handleNav} />
      <FormMovies
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        nav={nav}
        handleNav={handleNav}
      />
      <img
        src={movieroll}
        alt="movieroll"
        className="absolute right-0 z-0 hidden xl:block xl:w-[8%] xl:brightness-150 xl:grayscale 2xl:w-[15%]"
        style={{ zIndex: -1 }}
      />
      <div className="mx-auto mt-10 w-4/5 sm:w-3/4 md:w-5/6 2xl:w-3/5">
        {isLargerThan480 ? (
          <Slider {...settings}>{movieCards}</Slider>
        ) : (
          movieCards
        )}
      </div>
    </div>
  );
}

export default App;
