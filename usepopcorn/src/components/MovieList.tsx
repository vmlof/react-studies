import type { Movie as MovieType } from "../types/types";
import Movie from "./Movie";

type MovieListProps = {
  movies: MovieType[];
  onSelectedMovie: (id: string) => void;
};

function MovieList({ movies, onSelectedMovie }: MovieListProps) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </ul>
  );
}
export default MovieList;
