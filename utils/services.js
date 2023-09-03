const API_KEY = "9dc13ab07684260de99422672d9e454f";
const BASE_URL = "https://api.themoviedb.org/3";
export const baseUrl = "https://image.tmdb.org/t/p/original/";

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
};

export default requests;
