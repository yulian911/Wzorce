import { useEffect, useState } from "react";
import { MovieList } from "../components/Movie/MovieList";
import "./movie.css";
import cx from 'classnames'
import axios from "axios";
export interface MovieState {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export const Movie = () => {
  const [movies, setMovie] = useState<MovieState[]>([ ]);
  const [search ,setSearch]=useState()

  const getMovieRequest =async()=>{
    
    
    const res= await axios.get('http://www.omdbapi.com/?s=star wars&apikey=a98284e8' )
    const resJson=JSON.parse(JSON.stringify(res)).data
    setMovie(resJson.Search)
  
  }
  useEffect(() => {
    getMovieRequest()
    
    
  }, [])
 
  return (
    <div className=' container-fluid movie-app'>
      <div className=' row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};
