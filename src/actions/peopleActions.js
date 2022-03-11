import swapi from "../apis/swapi";
import akabab from "../apis/akabab"
import { getPersonId } from "../helpers/idHelpers";

export const fetchPeople = () => {
  return async function (dispatch, getState) {
    
    console.log('fetch people from api')
    let response = await swapi.get('/people');
    let results = response.data.results;

    // the api uses pagination by default,
    // in order to get the whole list a while loop iterates throuth the pages
    while (response.data.next != null){
      let nextPage = response.data.next.split("people")[1];
      response = await swapi.get(`/people${nextPage}`);
      results = [...results, ...response.data.results]
    }

    // add additional data from another api
    let imagesResponse = await akabab.get('/all.json');
    let images = imagesResponse.data;

    let resultsWithImages = results.map(r=> {    
      if (r.name === images[results.indexOf(r)].name) {
        return {
          ...r, image: images[results.indexOf(r)].image
        }
      }
      return {
        ...r, image: null
      }
    })

    dispatch({type: 'FETCH_PEOPLE', payload: resultsWithImages})    
  }
}

export const getPerson = (id) => {
  return async function (dispatch, getState) {
    const currentState = getState();
    if (currentState.people.includes(p=>getPersonId(p.url) === id)){
      dispatch({type: 'GET_PERSON'})
    }
    else {
      console.log('fetch person from api')
      let response = await swapi.get(`/people/${id}`);
      let person = response.data;

      let imagesResponse = await akabab.get(`/id/${id}.json`);
      let image = imagesResponse.data.image;
  
      dispatch({type: 'GET_PERSON', payload: {...person, image}})
    }

  }
}



