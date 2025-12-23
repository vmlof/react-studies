import { useState } from "react";
import Movie from "./Movie";

//temp movies
function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
