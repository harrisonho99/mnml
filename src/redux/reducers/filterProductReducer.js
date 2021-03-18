const filterProductReducer = (
  state = {
    filteredColor: null,
    filteredPrice: [0, 100],
    filteredSize: null,
    filteredType: null,
  },
  action
) => {
  switch (action.type) {
    case 'FILTER/SHOP':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
export default filterProductReducer;
