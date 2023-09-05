import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmInfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export const FilmTitle = styled.h1`
  color: #333;
`;

export const FilmImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

export const OverviewHeader = styled.h2`
  color: #333;
  margin-top: 20px;
`;

export const FilmDescription = styled.p`
  color: #555;
`;

export const GenreList = styled.p`
  color: #555;
`;

export const ReleaseDate = styled.p`
  color: #555;
`;

export const Popularity = styled.p`
  color: #555;
`;

export const VoteAverage = styled.p`
  color: #555;
`;

export const LinksList = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  margin-right: 20px;
`;
