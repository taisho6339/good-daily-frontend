import { handleActions } from 'redux-actions';
import {
  SEARCH_EVENT,
  INPUT_SEARCH_KEYWORD,
} from './../actions/eventActions';

const initialState = {
  keyword: '',
  results: [],
};

const eventReducer = handleActions({
  [SEARCH_EVENT]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [INPUT_SEARCH_KEYWORD]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default eventReducer;
