import { MovieState } from "../../pages/Movie";

interface MovieProps {
  movies: MovieState[];
}

export const MovieList = ({ movies }: MovieProps) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <img src={movie.Poster} alt="movie" />
      ))}
    </div>
  );
};
