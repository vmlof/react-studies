import type { WatchedMovie } from "../types/types";
import WatchMovie from "./WatchedMovie";

type WatchedMoviesListProps = {
  watched: WatchedMovie[];
  onDeleteWatched: (id: string) => void;
};

function WatchedMoviesList({
  watched,
  onDeleteWatched,
}: WatchedMoviesListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
export default WatchedMoviesList;
