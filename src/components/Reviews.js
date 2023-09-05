import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from './Api/api';
import {
  ReviewsContainer,
  NoReviewsMessage,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    fetchMovies(`/movie/${movieId}/reviews`).then(data => {
      return setReviews(data.results);
    });
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews?.length === 0 && (
        <NoReviewsMessage>
          We don't have any reviews for this movies
        </NoReviewsMessage>
      )}
      <ReviewList>
        {reviews.map(review => {
          return (
            <ReviewItem key={review.id}>
              <ReviewAuthor>Author: {review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          );
        })}
      </ReviewList>
    </ReviewsContainer>
  );
};

export default Reviews;
