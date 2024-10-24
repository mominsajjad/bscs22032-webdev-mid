import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${movie.Title} added to favorites!`);
  };

  return (
    <div className="card max-w-sm rounded overflow-hidden shadow-lg" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
      <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <button onClick={(e) => { 
          e.stopPropagation(); 
          addToFavorites(); 
        }}>
          Add to Favorites
        </button>
    </div>
  );
};

export default Card;
