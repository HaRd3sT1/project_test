import { createReducer } from 'redux-act';

import {
    USER_DETAILS
} from '../actions/userDetails';

const initialState = {};

const userDetails = createReducer(
    {
        [USER_DETAILS]: (state, payload) => {
            return ({
                ...state,
                ...payload
            })
        }
    },
    initialState
);
export default userDetails