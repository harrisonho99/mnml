import axios from 'axios';
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
      axios.post('http://192.168.2.2:4000/api/filter', action.payload);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
export default filterProductReducer;
