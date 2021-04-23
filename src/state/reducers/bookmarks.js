import { createReducer } from 'redux-act';

import {
    BOOKMARK_SEARCH,
    ADD_BOOKMARK,
} from '../actions/bookmarks';
const initialState = {};

const bookmarks = createReducer(
  {
    [BOOKMARK_SEARCH]: (state, payload) => {
        return ({ 
            ...state,
            ...payload
        })
    },
    [ADD_BOOKMARK]: (state, payload) => {
        return ({ 
            ...state,
            items:payload
        })
    },
  },
  initialState
);

export default bookmarks
