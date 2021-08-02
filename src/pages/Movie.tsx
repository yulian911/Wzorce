import React, { useEffect, useState } from "react";
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
  const [search ,setSearch]=useState('')

  const getMovieRequest =async()=>{
    
    
    const res= await axios.get('http://www.omdbapi.com/?s=star wars&apikey=a98284e8' )
    const resJson=JSON.parse(JSON.stringify(res)).data
    setMovie(resJson.Search)
  
  }
  useEffect(() => {
    getMovieRequest()
    
    
  }, [])


  const handleSearchMovie =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }
  return (
    <div className=' container-fluid movie-app'>
      <div><input style={{color:'#20c997'}} type="text" onChange={handleSearchMovie} /></div>
      <div className=' row'>

        <MovieList movies={movies.filter(movie=>movie.Title.toLowerCase().includes(search))} />
      </div>
    </div>
  );
};
