import { Link } from 'react-router-dom';
import { Title, Wrap } from './Homelist.styled';

const Homelist = ({ movies }) => {
  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {movies.map(movie => {
          return (
            <Wrap key={movie.id}>
              <Link to={`/movies/${movie.id}`}> {movie.original_title}</Link>
            </Wrap>
          );
        })}
      </ul>
    </>
  );
};

export default Homelist;
