import fetchMovies from 'components/Api/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState([]);
  // console.log('selectedMovie', selectedMovie);

  useEffect(() => {
    fetchMovies(`/movie/${movieId}`)
      .then(response => {
        setSelectedMovie(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  const {
    title,
    overview,
    poster_path,
    genres,
    release_date,
    popularity,
    vote_average,
  } = selectedMovie;

  return (
    <>
      <h1>{title}</h1>
      <img
        alt={poster_path}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        width={250}
      ></img>
      <h2>Overview</h2>
      <p>{overview}</p>
      <p>{genres ? genres.map(({ name }) => name).join(', ') : ' '}</p>
      <p>Release date: {release_date}</p>
      <p>Popularity: {popularity}</p>
      <p>Vote average: {vote_average}</p>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};

export default MovieDetails;
