import { handleActions } from 'redux-actions';
import {
  SEARCH_ARTIST,
  FETCH_LIVE_LIST,
} from './../actions/eventActions';

const initialState = {
  keyword: '',
  results: [],
};

const eventReducer = handleActions({
  [SEARCH_ARTIST]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [FETCH_LIVE_LIST]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default eventReducer;
