import { NavLink, Outlet } from 'react-router-dom';
const Loyaout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Loyaout;
