import { MovieState } from "../../pages/Movie";

interface MovieProps {
  movies: MovieState[];
}

export const MovieList = ({ movies }: MovieProps) => {
  return (
    <>
       
      {movies.map((movie, index) => (<div key={movie.imdbID} style={{width:'23%'}}>
        <img src={movie.Poster} alt="movie" />
      </div>
      ))}
    </>
  );
};
