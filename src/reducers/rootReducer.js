import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";
//import starshipsReducer from "./starshipsReducer";
import moviesReducer from './moviesReducer';

export default combineReducers({
  people: peopleReducer,
  //starships: starshipsReducer,
  movies: moviesReducer
});