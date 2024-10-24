import React from "react";

const Favorites = () => {
  const favoriteMovies = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorites">
      <h2>Your Favorite Movies</h2>
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((movie) => (
          <div key={movie.imdbID} className="favorite-movie">
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))
      ) : (
        <h3>No favorites added yet</h3>
      )}
    </div>
  );
};

export default Favorites;
