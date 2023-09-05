import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastItem = styled.li`
  text-align: center;
  margin: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 140px;
`;

export const CastImage = styled.img`
  width: 100%;
`;

export const CastName = styled.h2`
  margin: 10px 0;
  color: #333;
`;

export const CastCharacter = styled.p`
  color: #555;
`;
