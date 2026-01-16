export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type WatchedMovie = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
  countRatingDecisions?: number;
};

export type MovieDetailsData = {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
};
