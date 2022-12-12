import { useState, useEffect } from 'react';
import { getFilmsByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const movieName = params.get('query');

    if (!movieName) {
      return;
    }

    getFilmsByQuery(movieName).then(setMovies);
  }, [params]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setParams({ query });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};
