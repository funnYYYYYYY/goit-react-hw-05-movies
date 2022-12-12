import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '1597a1507afef30e38994154d5f0aaa9';

export const getPopularFilms = async () => {
  const { data: results } = await axios.get(
    `/trending/movies/day?api_key=${KEY}`
  );

  console.log(results);
};
