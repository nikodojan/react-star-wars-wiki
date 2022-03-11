export const starshipsReducer = (state=[], action) => {
  switch (action.type) {
    case 'FETCH_STARSHIPS':
      return action.payload;
    case 'GET_SHIP':
      return [...state, action.payload]
    default:
      return state;
  }
}

