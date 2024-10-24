import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://www.omdbapi.com?apikey=eada1604";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="movie-details">
      {movie ? (
        <>
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <p>Released: {movie.Released}</p>
          <p>Genre: {movie.Genre}</p>
          <p>IMDB Rating: {movie.imdbRating}</p>
        </>
      ) : (
        <h2>Loading movie details...</h2>
      )}
    </div>
  );
};

export default MovieDetails;
