import axios from 'axios';
export function searchTermAction(term) {
  return {
    type: 'SEARCH_TERM',
    payload: term,
  };
}
export function subcribeEmail(email) {
  return {
    type: 'ADD_SUBCRIBE_EMAIL',
    payload: email,
  };
}

export function setCardData() {
  return (dispatch, getState) => {
    const { filterProduct } = getState();
    return axios
      .post('http://localhost:4000/api/filter', filterProduct)
      .then((result) => {
        dispatch({
          type: 'SET_CARD_DATA',
          payload: result.data,
        });
      })
      .catch((err) => {
        //handle err
        console.error(err);
        dispatch({
          type: 'SET_ERROR',
          payload: err,
        });
      });
  };
}
