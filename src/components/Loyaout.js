import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { List } from './Loyaout.styled';

const Loyaout = () => {
  return (
    <div>
      <header>
        <List>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </List>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
    
  );
};

export default Loyaout;
