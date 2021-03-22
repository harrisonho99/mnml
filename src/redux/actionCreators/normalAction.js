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
