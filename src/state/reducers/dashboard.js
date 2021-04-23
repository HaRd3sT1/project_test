import { createReducer } from 'redux-act';

import {
    CHANGE_MODE
} from '../actions/dashboard';
const initialState = {};

const formReducer = createReducer(
  {
    [CHANGE_MODE]: (state, payload) => {
        return ({ 
            ...state,
            mode:payload
        })
    }
  },
  initialState
);

export default formReducer
