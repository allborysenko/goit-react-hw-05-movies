import { Link } from 'react-router-dom';

const Homelist = ({ movies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}> {movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Homelist;
