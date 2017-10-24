import { handleActions } from 'redux-actions';
import {
  UPDATE_REGISTRATION_FORM,
} from './../actions/registrationAction';

const initialState = {
  stepIndex: 0,
};

const registrationReducer = handleActions({
  [UPDATE_REGISTRATION_FORM]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default registrationReducer;
