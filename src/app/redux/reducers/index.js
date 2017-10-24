import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import registrationReducer from './registrationReducer';

const reducers = combineReducers({
  routing: routerReducer,
  registration: registrationReducer,
});
export default reducers;
