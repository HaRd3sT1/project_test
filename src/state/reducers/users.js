import { createReducer } from 'redux-act';

import {
    USERS_START,
    USERS_END,
} from '../actions/users';

const initialState = {};

const newsletters = createReducer(
    {
        [USERS_START]: (state, payload) => {
            return ({
                ...state,
                loading: true
            })
        },
        [USERS_END]: (state, payload) => {
            return ({
                ...state,
                loading: false,
                error: ""
            })
        }
    },
    initialState
);
export default newsletters