import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const fakeUrl =
  'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

const Container = styled.div`
  width: 1280px;
  padding: 52px 24px;
  margin-left: auto;
  margin-right: auto;
`;

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: -16px;
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
`;

const Img = styled.img`
  border-radius: 5px;
  width: 395px;
  height: 575px;

  cursor: pointer;
`;

const Item = styled.li`
  position: relative;
  width: calc(33.3333% - 32px);
  margin: 10px;
  display: flex;
  justify-content: center;
`;

const Link = styled(NavLink)`
  margin-bottom: 12 px;
  overflow: hidden;
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
`;

const Text = styled.p`
  font-size: 15px;

  font-weight: 700;
  color: black;
`;

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <Gallery>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.poster_path ? (
                <Img
                  src={`${BASE_IMG_URL + movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <Img src={`${fakeUrl}`} alt={movie.title} />
              )}
              <Text>{movie.title || movie.name}</Text>
            </Link>
          </Item>
        ))}
      </Gallery>
    </Container>
  );
};
