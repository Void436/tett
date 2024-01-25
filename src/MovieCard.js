import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <>
            <img src={movie.posterURL} alt="#"/>
            <h3>Movie Title: {movie.title}</h3>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
        </>
    );
};

export default MovieCard;