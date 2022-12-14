// import { lazy, Suspense } from 'react';

import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast';
import { Navigation } from './Navigation';
import { Reviews } from './Reviews';

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails.jsx'));
// const Cast = lazy(() => import('./Cast'));
// const Navigation = lazy(() => import('./Navigation'));
// const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <>
      <Navigation />
      {/* <Suspense fallback={null}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
