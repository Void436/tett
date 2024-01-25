import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Godfather',
      description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
      posterURL: 'poster1.jpg',
      rating: 4.5,
    },
    {
      title: 'Movie 1',
      description: 'Description 1',
      posterURL: 'poster1.jpg',
      rating: 4.5,
    },
    {
      title: 'Movie 1',
      description: 'Description 1',
      posterURL: 'poster1.jpg',
      rating: 4.5,
    },
    {
      title: 'Movie 1',
      description: 'Description 1',
      posterURL: 'poster1.jpg',
      rating: 4.5,
    },
    {
      title: 'Movie 1',
      description: 'Description 1',
      posterURL: 'poster1.jpg',
      rating: 4.5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleFilter = ({ title, rate }) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rate
    );
    setFilteredMovies(filtered);
  };

  const AddMovieForm = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      const newMovie = {
        title,
        description,
        posterURL,
        rating: parseFloat(rating),
      };

      onAddMovie(newMovie);

      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Poster URL:
          <input
            type="text"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            required
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    );
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
