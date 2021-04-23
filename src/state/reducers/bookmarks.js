import { createReducer } from 'redux-act';

import {
    BOOKMARK_SEARCH,
    BOOKMARK_DATA
} from '../actions/bookmarks';
const initialState = {};

const bookmarks = createReducer(
  {
    [BOOKMARK_SEARCH]: (state, payload) => {
        return ({ 
            ...state,
            search:payload
        })
    },
    [BOOKMARK_DATA]: (state, payload) => {
        return ({ 
            ...state,
            list:payload
        })
    }
  },
  initialState
);

export default bookmarks
