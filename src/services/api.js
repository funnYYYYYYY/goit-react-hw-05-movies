import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1597a1507afef30e38994154d5f0aaa9';

// Популярні фільми які відображені на головній сторінці

export const getPopularFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  console.log(results);
  return results;
};

// Пошук фільмів по їх id

export const getFilmsById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

// Пошук фільмів по назві

export const getFilmsByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return results;
};

// Відображення відгуків фільму

export const getFilmsDisplayMovieReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data.results;
};

// Відображення акторського складу

export const getFilmsCastReflection = async id => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

//Відображення повної інформації про фільм

export const getDetailsAboutFilms = async id => {
  const {
    data: { genres },
  } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

  return genres;
};
