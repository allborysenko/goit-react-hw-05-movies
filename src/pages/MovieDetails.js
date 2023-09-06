import fetchMovies from 'components/Api/api';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  FilmInfoContainer,
  BackLink,
  FilmTitle,
  FilmImage,
  OverviewHeader,
  FilmDescription,
  GenreList,
  ReleaseDate,
  Popularity,
  VoteAverage,
  LinksList,
  ListItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
    <FilmInfoContainer>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      <FilmTitle>{title}</FilmTitle>

      <FilmImage
        alt={poster_path}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        width={250}
      ></FilmImage>
      <OverviewHeader>Overview</OverviewHeader>
      <FilmDescription>{overview}</FilmDescription>
      <GenreList>
        {genres ? genres.map(({ name }) => name).join(', ') : ' '}
      </GenreList>
      <ReleaseDate>Release date: {release_date}</ReleaseDate>
      <Popularity>Popularity: {popularity}</Popularity>
      <VoteAverage>Vote average: {vote_average}</VoteAverage>

      <LinksList>
        <ListItem>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </ListItem>
        <ListItem>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </ListItem>
      </LinksList>
      <Suspense>
        <Outlet />
        <Outlet />
      </Suspense>
    </FilmInfoContainer>
  );
};

export default MovieDetails;
