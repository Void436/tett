import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <>
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </>
    );
};

export default MovieList;