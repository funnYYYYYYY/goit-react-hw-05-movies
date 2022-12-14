import { useState, useEffect } from 'react';
import { getDetailsAboutFilms } from 'services/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;

export const Details = () => {
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    getDetailsAboutFilms(movieId).then(setGenres);
  }, [movieId]);

  return (
    <List>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </List>
  );
};
