export function filterAction(route, filtered) {
  return {
    type: 'FILTER' + route.toString().toUpperCase(),
    payload: filtered,
  };
}
