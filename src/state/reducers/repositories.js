import { createReducer } from 'redux-act';

import {
    REPOSITORIES_DATA
} from '../actions/repositories';
const initialState = {};

const repositories = createReducer(
  {
    [REPOSITORIES_DATA]: (state, payload) => {
        return ({ 
            ...state,
            ...payload
        })
    }
  },
  initialState
);

export default repositories
