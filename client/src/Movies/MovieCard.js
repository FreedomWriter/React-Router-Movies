import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movies }) => {
  console.log(movies);

  function MovieDetails({ movie }) {
    console.log(movie);
    const { title, director, metascore, stars } = movie;
    return (
      <div className="movie-card">
        <h2>{title}</h2>

        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};
export default MovieCard;
