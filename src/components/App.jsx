import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="//movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
