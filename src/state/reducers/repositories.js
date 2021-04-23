import { createReducer } from 'redux-act';

import {
    REPOSITORIES_DATA,
    REPOSITORIES_DETAILS,
} from '../actions/repositories';
const initialState = {};

const repositories = createReducer(
  {
    [REPOSITORIES_DATA]: (state, payload) => {
        return ({ 
            ...state,
            ...payload
        })
    },
    [REPOSITORIES_DETAILS]: (state, payload) => {
        return ({ 
            ...state,
            details:payload
        })
    }
  },
  initialState
);

export default repositories
