import { useState } from "react";
import { MovieList } from "../components/Movie/MovieList";
import "./movie.css";
export interface MovieState {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export const Movie = () => {
  const [movies, setMovie] = useState<MovieState[]>([
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
    {
      Title: "Starwars: Goretech",
      Year: "2018",
      imdbID: "tt9336300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg",
    },
  ]);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};
