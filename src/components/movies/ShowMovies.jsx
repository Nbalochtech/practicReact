import React from "react";
import movies from "./movies.json";
import Movie from "./Movie";

const ShowMovies = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <Movie
                key={index}
                title={movie.Title}
                year={movie.Year}
                img={movie.Poster}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowMovies;
