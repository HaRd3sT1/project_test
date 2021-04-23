import { createAction } from 'redux-act';

export const BOOKMARK_SEARCH = createAction('BOOKMARK_SEARCH');
export const BOOKMARK_DATA = createAction('BOOKMARK_DATA');


const bookmarkSearch = (search) => {
    return async (dispatch, getState) => {
        let arr = []
        dispatch(BOOKMARK_SEARCH(arr))
    }
};

export { bookmarkSearch };