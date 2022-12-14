import { useState, useEffect } from 'react';
import { getPopularFilms } from 'services/api';
import { MoviesList } from 'components/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularFilms().then(setMovies);
  }, []);
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
