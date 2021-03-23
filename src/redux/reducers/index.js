import { combineReducers } from 'redux';
import setRoute from './setRouteReducer';
import searchTerm from './searchTermReducer';
import subcribeEmail from './subcribeEmailReducer';
import filterProduct from './filterProductReducer';
import cardDataReducer from './cardDataReducer';
const appReducer = combineReducers({
  setRoute,
  searchTerm,
  subcribeEmail,
  filterProduct,
  cardDataReducer,
});
export default appReducer;
