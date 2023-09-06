import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 10px 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const ListItem = styled.li`
  margin-right: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  :hover {
    color: #007bff;
  }
  &.active{
    color: red;
  }
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Loading = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #333;
`;
