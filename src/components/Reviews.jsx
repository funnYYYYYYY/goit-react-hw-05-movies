import { useState, useEffect } from 'react';
import { getFilmsDisplayMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const TextAuthor = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

const Author = styled.b`
  font-weight: 700;
  font-size: 20px;
  color: green;
`;

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  console.log('reviews', reviews);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getFilmsDisplayMovieReviews(movieId).then(setReviews);
    }
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <TextAuthor>
                <Author>Author:</Author> {author}
              </TextAuthor>
              <Text>{content}</Text>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </div>
  );
};

export default Reviews;
