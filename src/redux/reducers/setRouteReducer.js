const setRouteReducer = (state = { route: '/' }, action) => {
  switch (action.type) {
    case 'SHOP_ROUTE':
      return { ...state, route: action.payload };

    default:
      return state;
  }
};
export default setRouteReducer;
