import { createReducer } from 'redux-act';

import {
    USERS_START,
    USERS_END,
    USERS_DATA
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
        },
        [USERS_DATA]: (state, payload) => {
            return ({
                ...state,
                ...payload
            })
        }
    },
    initialState
);
export default newsletters