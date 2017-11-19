import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import registrationReducer from './registrationReducer';
import eventReducer from './eventReducer';

const reducers = combineReducers({
  routing: routerReducer,
  registration: registrationReducer,
  event: eventReducer,
});
export default reducers;
