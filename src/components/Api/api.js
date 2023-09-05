import axios from 'axios';

const fetchMovies = async (path, query) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: '7e1673a77901f953d2f3821db4df045d',
      query: query,
    },
  });
  return response.data;
};

export default fetchMovies;
