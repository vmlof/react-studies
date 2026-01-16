import type { Movie } from "../types/types";

type NumResultsProps = {
  movies: Movie[];
};

function NumResults({ movies }: NumResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResults;
