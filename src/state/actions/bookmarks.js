import { createAction } from 'redux-act';

export const BOOKMARK_SEARCH = createAction('BOOKMARK_SEARCH');
export const ADD_BOOKMARK = createAction('ADD_BOOKMARK');


const addBookmark = (data) => {
    return async (dispatch, getState) => {
        const items = getState().bookmarks.items ? getState().bookmarks.items : [];
        let arr = items
        arr.push(data)
        dispatch(ADD_BOOKMARK(arr))
    }
};

const bookmarkSearch = (search) => {
    return async (dispatch, getState) => {
        const items = getState().bookmarks.items ? getState().bookmarks.items : [];
        console.log(items);
        let arr = []
        items.forEach(doc=>{
            if (doc.full_name.indexOf(search) > -1) {
                arr.push(doc)
              }
        })
        dispatch(BOOKMARK_SEARCH({
            search:arr,
            total_count:arr.length
        }))
    }
};

export { bookmarkSearch, addBookmark };