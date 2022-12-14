// import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { getFilmsById } from 'services/api';
import { useParams } from 'react-router-dom';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { Details } from 'components/Details';

const Container = styled.div`
  width: 1280px;
  padding: 52px 24px;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.h2`
  font-size: 15px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: black;
`;

const Img = styled.img`
  border-radius: 5px;
  width: 395px;
  height: 575px;
  transition-property: scale;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 1s ease-out;
  cursor: pointer;
`;

const Link = styled(NavLink)`
  font-size: 20px;
  display: block;
  margin-bottom: 12 px;
  overflow: hidden;
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
`;

const ListDescription = styled.ul`
  list-style: none;
  font-weight: 700;
  color: red;
`;

const Description = styled.span`
  font-size: 15px;
  color: green;
  font-weight: 500;
`;

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const fakeUrl =
  'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

const MovieDetails = () => {
  const [details, setDetails] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    getFilmsById(movieId).then(setDetails);
  }, [movieId]);

  if (!details) {
    return;
  }
  console.log('details', details);

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <Container>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>

      <Text>{details.title}</Text>
      {details.poster_path ? (
        <Img
          src={`${BASE_IMG_URL + details.poster_path}`}
          alt={details.title}
        />
      ) : (
        <Img src={`${fakeUrl}`} alt="Oops... An error occurred" />
      )}
      <ListDescription>
        <li>
          Release date:
          <Description>{details.release_date}</Description>
        </li>
        <li>
          Rating:
          <Description>{details.vote_average}</Description>
        </li>
        <li>
          Overview:
          <Description>{details.overview}</Description>
        </li>

        <li>
          Popularity:
          <Description>{details.popularity}</Description>
        </li>

        <li>
          Genres:
          <Description>
            <Details />
          </Description>
        </li>
      </ListDescription>

      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>

      {/* <Suspense>
        <Outlet />
      </Suspense> */}
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
