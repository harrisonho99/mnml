const searchTermReducer = (state = { term: '' }, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return { ...state, term: action.payload };
    default:
      return state;
  }
};
export default searchTermReducer;
