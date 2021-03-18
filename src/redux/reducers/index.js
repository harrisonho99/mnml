import { combineReducers } from 'redux';
import setRoute from './setRouteReducer';
import searchTerm from './searchTermReducer';
import subcribeEmail from './subcribeEmailReducer';
import filterProduct from './filterProductReducer';
const appReducer = combineReducers({
  setRoute,
  searchTerm,
  subcribeEmail,
  filterProduct,
});
export default appReducer;
