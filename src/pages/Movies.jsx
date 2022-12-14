import { useState, useEffect } from 'react';
import { getFilmsByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  border-radius: 3px;
  overflow: hidden;
`;

const Movies = () => {
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
      <Form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </Form>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
