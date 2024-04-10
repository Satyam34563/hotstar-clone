import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const img_url = "https://image.tmdb.org/t/p/original";
function slider() {
  const screenWidth = window.innerWidth;
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrending.then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 96;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 96;
  };
  return (
    <div>
      <HiChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[250px] cursor-pointer"
      />
      <HiChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className="hidden md:block text-white right-0 text-[30px] absolute mx-8 mt-[250px] cursor-pointer"
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie) => {
          return (
            <img
              src={img_url + movie.backdrop_path}
              className="min-w-full md:h-[510px] object-cover object-left-top mr-8 rounded-md hover:border-[4px] border-grey-400 transition-all duration-100 ease-in-out"
              alt=""
              srcset=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default slider;
