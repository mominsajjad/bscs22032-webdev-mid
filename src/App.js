import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Card from "./Card";
import SearchIcon from "./search.svg";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";
import Footer from "./Footer"

const API_URL = "https://www.omdbapi.com?apikey=eada1604";

const App = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const searchMovies = (e) => {
    setSearchTitle(e.target.value);
  };

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`, { mode: "cors" });
    const data = await response.json();
    setMovies(data.Search || []);
    setLoading(true);
  };

  const movieSearch = () => {
    setLoading(false);
    getMovies(searchTitle);
  };

  useEffect(() => {
    getMovies("spy");
  }, []);

  return (
    <div className="app">
       <h1 className="titole">Momin's Flix</h1>
      <div className="hdr">
     
       <ul>
       <nav className="nav">
        <li><Link to="/"><a>Home</a></Link></li>
        <li> <Link to="/favorites"><a>Favorites</a></Link></li>
  </nav>
</ul>
      </div>
      

   
     

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="search">
                <input
                  placeholder="Search movie"
                  value={searchTitle}
                  onChange={searchMovies}
                />
                <img src={SearchIcon} alt="search" onClick={movieSearch} />
              </div>
              <div className="container">
                {loading ? (
                  movies.length > 0 ? (
                    movies.map((movie) => (
                      <Card movie={movie} key={movie.imdbID} />
                    ))
                  ) : (
                    <div className="empty">
                      <h2>No movies found</h2>
                    </div>
                  )
                ) : (
                  <Loader />
                )}
              </div>
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

          <Footer/>
    </div>
  );
};

export default App;
