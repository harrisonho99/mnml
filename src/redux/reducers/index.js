import { combineReducers } from 'redux';
import setRouteReducer from './setRouteReducer';
import searchTermReducer from './searchTermReducer';
const appReducer = combineReducers({ setRouteReducer, searchTermReducer });
export default appReducer;
