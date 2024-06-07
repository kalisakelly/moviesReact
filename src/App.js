import './App.css';
import { useState,useEffect } from 'react';
import SearchIcon from "./search.svg";
import MovieCard from './moviecard'



const API_URL='http://www.omdbapi.com?apikey=6de45214'

function App() {

  const [movies,setMovies]= useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(()=>{

    searchMovies()

  },[])


  return (

    <div className="App">

      <h1>Agasobanuye</h1>

      <div className='search'>
      <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

       {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
