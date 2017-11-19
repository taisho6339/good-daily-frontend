import { handleActions } from 'redux-actions';
import {
  SEARCH_EVENT,
} from './../actions/eventActions';

const initialState = {
  keyword: '',
  suggestKeywords: [],
};

const eventReducer = handleActions({
  [SEARCH_EVENT]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default eventReducer;
