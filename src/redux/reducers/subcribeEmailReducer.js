const subcribeEmailReducer = (state = { email: '' }, action) => {
  switch (action.type) {
    case 'ADD_SUBCRIBE_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
export default subcribeEmailReducer;
