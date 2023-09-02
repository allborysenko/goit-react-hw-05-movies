import axios from 'axios';

// 7e1673a77901f953d2f3821db4df045d

// import axios from 'axios';
// //const   api_key='f5a68a81db900311929f7e0e465c0c04'

// export const fetchMovie = async (path, query) => {
//   const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
//     method: 'get',
//     params: {
//       api_key: 'f5a68a81db900311929f7e0e465c0c04',
//       query: query,
//     },
//   });
//   return response.data;
// };

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
