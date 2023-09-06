import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from './Api/api';
import {
  CastList,
  CastItem,
  CastImage,
  CastName,
  CastCharacter,
} from './Cast.styled';

import { FaUser } from 'react-icons/fa';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    fetchMovies(`/movie/${movieId}/credits`).then(data => {
      return setCast(data.cast);
    });
  }, [movieId]);

  return (
    <CastList>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => {
          return (
            <CastItem key={id}>
              {profile_path ? (
                <CastImage
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  width="100"
                />
              ) : (
                <div className="cast-icon">
                  <FaUser size={140} />
                </div>
              )}
              <CastName>{name}</CastName>
              <CastCharacter>Character: {character}</CastCharacter>
            </CastItem>
          );
        })}
    </CastList>
  );
};

export default Cast;
