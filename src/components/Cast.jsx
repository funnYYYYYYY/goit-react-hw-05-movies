import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsCastReflection } from 'services/api';
import styled from 'styled-components';

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
const Item = styled.li`
  list-style-type: none;
  position: relative;
  width: calc((100% - (3 * 10px)) / 5);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

const Img = styled.img`
  border-radius: 5px;
  width: 395px;
  height: 575px;

  cursor: pointer;
`;

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const fakeUrl =
  'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  console.log('cast', credits);
  const { movieId } = useParams();

  useEffect(() => {
    getFilmsCastReflection(movieId).then(setCredits);
  }, [movieId]);

  if (!credits) {
    return;
  }

  return (
    <Container>
      {credits.map(({ id, original_name, profile_path, name, character }) => (
        <Gallery>
          <Item key={id}>
            <Text>{original_name}</Text>
            {profile_path ? (
              <Img
                src={`${BASE_IMG_URL + profile_path}`}
                alt={name}
                width={200}
                height={300}
              />
            ) : (
              <Img src={`${fakeUrl}`} alt={name} width={200} height={300} />
            )}

            <p>{character}</p>
          </Item>
        </Gallery>
      ))}
    </Container>
  );
};

export default Cast;
