import { combineReducers } from 'redux';
import setRouteReducer from './setRouteReducer';
import searchTermReducer from './searchTermReducer';
import subcribeEmailReducer from './subcribeEmailReducer';
const appReducer = combineReducers({
  setRouteReducer,
  searchTermReducer,
  subcribeEmailReducer,
});
export default appReducer;
