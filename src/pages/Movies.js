import fetchMovies from 'components/Api/api';
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSerchParams] = useSearchParams();
  const movieId = searchParams.get('movieId')?? '';
  const [movie, setMovie] = useState([]);
  console.log('movie', movie)

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
     const movieIdValue = ev.target.value.trim();
     if (movieIdValue === '') {
       return setSerchParams({});
     }
     setSerchParams({ movieId: movieIdValue });
   };

      

  return (
    <div>
      <form>
        <input value={movieId} type="text" onChange={updateQueryString}></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movie.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
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
