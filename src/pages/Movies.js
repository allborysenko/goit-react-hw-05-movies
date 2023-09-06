import fetchMovies from 'components/Api/api';
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('query') ?? '';
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    fetchMovies('/search/movie', movieId)
      .then(resp => {
        if (resp.results.length === 0) {
          return 'Sorry, but nothing was found';
        }
        return setMovie(resp.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  const updateQueryString = ev => {
    ev.preventDefault();
    const search = ev.target.elements.search.value;
    setSearchParams({ query: search });
  };

  return (
    <div>
      <form onSubmit={updateQueryString}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          defaultValue={movieId}
        ></input>

        <button type="submit">Search</button>
      </form>
      <ul>
        {movie.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
