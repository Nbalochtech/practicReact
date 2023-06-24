import React from "react";
import movies from "./movies.json";
import Movie from "./Movie";
import { Outlet } from "react-router-dom";

const ShowMovies = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <Movie
                index={index}
                title={movie.Title}
                year={movie.Year}
                img={movie.Poster}
                imdbID={movie.imdbID}
              />
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ShowMovies;
