import { useState, useEffect } from 'react';
import { getFilmsById } from 'services/api';
import { useParams } from 'react-router-dom';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const [details, setDetails] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getFilmsById(movieId).then(setDetails);
  }, [movieId]);

  if (!details) {
    return;
  }

  return (
    <>
      <h2>{details.title}</h2>
      <img src={BASE_IMG_URL + details.poster_path} alt={details.title} />
    </>
  );
};
