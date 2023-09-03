import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from './Api/api';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  console.log('reviews', reviews);

  useEffect(() => {
    if (!movieId) return;
    fetchMovies(`/movie/${movieId}/reviews`).then(data => {
      return setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews?.length === 0 && (
        <p>We don't have any reviews for this movies</p>
      )}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
