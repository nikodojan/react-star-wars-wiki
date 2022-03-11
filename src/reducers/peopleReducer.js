const peopleReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE':
      return action.payload;
    case 'GET_PERSON':
      return [...state, action.payload]
    default:
      return state;
  }
}

export default peopleReducer;