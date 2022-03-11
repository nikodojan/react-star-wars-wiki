import swapi from "../apis/swapi";

export const fetchStarships = () => {
  return async function (dispatch, getState) {
    const currentState = getState();
    if (currentState.starships.length > 0) {
      return
    }

    console.log('fetch starships from api')
    let response = await swapi.get('/people');
    let starships = response.data.results;

    while (response.data.next != null){
      let nextPage = response.data.next.split("starships")[1];
      response = await swapi.get(`/people${nextPage}`);
      starships = [...starships, ...response.data.results]
    }

    dispatch({type: 'FETCH_STARSHIPS', payload: starships})
  }
}

export const getShip = (url) => {
  return async function (dispatch, getState) {
    const currentState = getState();
    if (currentState.starships.length > 0 && currentState.starships.includes(s=>s.url===url)) {
      let ship = currentState.starships.find(s=>s.url === url);
      dispatch({type: 'GET_SHIP', payload: ship});
    }
    else {
      let shipUrl = url.split('dev/api')[1];
      let shipResponse = await swapi.get(shipUrl);
      dispatch({type: 'GET_SHIP', payload: shipResponse.data});
    }
  }
}