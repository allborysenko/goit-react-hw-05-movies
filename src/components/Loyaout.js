import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  List,
  ListItem,
  StyledNavLink,
  Main,
  Loading,
} from './Loyaout.styled';

const Loyaout = () => {
  return (
    <Container>
      <Header>
        <List>
          <ListItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </ListItem>
        </List>
      </Header>
      <Main>
        <Suspense fallback={<Loading>Loading...</Loading>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Loyaout;
