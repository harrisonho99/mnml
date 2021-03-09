export function searchTermAction(term) {
  return {
    type: 'SEARCH_TERM',
    payload: term,
  };
}
