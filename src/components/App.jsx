import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loyaout from './Loyaout';

const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyaout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
