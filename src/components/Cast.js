import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from './Api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  console.log('cast', cast);

  useEffect(() => {
    if (!movieId) return;
    fetchMovies(`/movie/${movieId}/credits`).then(data => {
      return setCast(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img
                scr={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width="100"
              />
              <h2>{name}</h2>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </>
  );
};

export default Cast;
