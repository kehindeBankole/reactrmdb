// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f
// Read more about the API here: https://developers.themoviedb.org/

// const API_URL = 'https://api.themoviedb.org/3/';
// const randomid = Math.floor((Math.random() * 99) + 1)
const API_URL= `https://api.themoviedb.org/3/search/movie?api_key=fcd5d6f43f641c10edc0fde7cfebb493&language=en-US&query=%22marvel%22&page=1&include_adult=false`;
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';
// API_KEY,
export { API_URL, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE };
