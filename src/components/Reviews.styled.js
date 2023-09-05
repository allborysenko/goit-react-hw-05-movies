import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const NoReviewsMessage = styled.p`
  color: #333;
  font-weight: bold;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin: 20px 0;
`;

export const ReviewAuthor = styled.p`
  color: #555;
  font-weight: bold;
`;

export const ReviewContent = styled.p`
  color: #333;
`;
