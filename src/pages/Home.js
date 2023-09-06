import { useEffect, useState } from 'react';
import fetchMovies from 'components/Api/api';
import Homelist from 'components/Homelist';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies('/trending/movie/day')
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return <>{movies && <Homelist movies={movies} />}</>;
};

export default Home;
