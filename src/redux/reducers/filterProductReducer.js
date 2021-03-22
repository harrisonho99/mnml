import axios from 'axios';
import { filterSchema } from '../actionCreators/filterAction';
import { FILTER } from '../../helper/_listNavURL';
const filterProductReducer = (state = filterSchema(FILTER), action) => {
  switch (action.type) {
    case 'FILTER/SHOP':
      axios.post('http://localhost:4000/api/filter', action.payload);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
export default filterProductReducer;
