import swapi from "../apis/swapi";

export const fetchMovies = () => {
  return async function (dispatch) {
    console.log('fetch movies from api')
    let response = await swapi.get('/films');
    let movies = response.data.results;

    dispatch({type: 'FETCH_MOVIES', payload: movies})
  }
}