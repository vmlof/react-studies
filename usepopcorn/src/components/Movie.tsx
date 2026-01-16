import type { Movie as MovieType } from "../types/types";

type MovieProps = {
  movie: MovieType;
  onSelectedMovie: (id: string) => void;
};

function Movie({ movie, onSelectedMovie }: MovieProps) {
  return (
    <li onClick={() => onSelectedMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓️</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
