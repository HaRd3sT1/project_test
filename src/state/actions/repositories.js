import { createAction } from 'redux-act';
import axios from "axios"

export const REPOSITORIES_DATA = createAction('REPOSITORIES_DATA');


const repositoriesData = (search, perPage) => {
    return async (dispatch, getState) => {
        if(search){
            axios.get('https://api.github.com/search/repositories?q='+search+'&per_page='+perPage)
            .then(function (response) {
                dispatch(REPOSITORIES_DATA({
                    items:response.data.items ? response.data.items : [],
                    total_count: response.data.total_count ? response.data.total_count : 0
                }))
            }).catch(function (error) {  console.log(error) })
        }else{
            dispatch(REPOSITORIES_DATA({
                items:[],
                total_count: 0
            }))
        }
    }
};

export { repositoriesData };