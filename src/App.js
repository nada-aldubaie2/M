import { Container} from "react-bootstrap";
import Navbar from "./Components/Navbar";
import MoviesList from "./Components/MoviesList";
import { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieContent from './Components/MovieContent';

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d42d38fd9b1aec47f43d967a99d7a95b&lnaguage=en-US&page=1");
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  
  const search = async (searchWord) => {
    console.log(searchWord);
  if(searchWord === ""){
    getAllMovies();
  }else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d42d38fd9b1aec47f43d967a99d7a95b&query=${searchWord}&include_adult=false&language=en-US&page=1`);
    setMovies(res.data.results);
    console.log(res.data.results);
    setPageCount(res.data.total_pages)

  }
  };
  const getPages = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d42d38fd9b1aec47f43d967a99d7a95b&lnaguage=en-US&page=${page}`);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages)

    //console.log(res.data.results);
  };

  return (
    <>
      <Navbar search={search}/>
      <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MoviesList movies={movies} getPages={getPages} pageCount={pageCount}/>}/>
          <Route path="/movie/:id" element={ <MovieContent/>}/>
    
        </Routes>
      </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
