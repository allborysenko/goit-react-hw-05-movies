import fetchMovies from 'components/Api/api';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

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

  console.log('location', location);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>
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
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
