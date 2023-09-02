import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from './Api/api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  console.log('reviews', reviews);

  useEffect(() => {
    if (!movieId) return;
    fetchMovies(`/movie/${movieId}/reviews`).then(data => {
      return setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews ? (
        reviews.map(({ author, id, content }) => {
          return (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>Content: {content}</p>
            </li>
          );
        })
      ) : (
        <h3>We do not have any reviews for this movie.</h3>
      )}
    </>
  );
};

export default Reviews;
