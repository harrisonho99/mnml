import { filterSchema } from '../actionCreators/filterAction';
import { FILTER } from '../../helper/_listNavURL';
const filterProductReducer = (state = filterSchema(FILTER), action) => {
  switch (action.type) {
    case 'FILTER/SHOP':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
export default filterProductReducer;
