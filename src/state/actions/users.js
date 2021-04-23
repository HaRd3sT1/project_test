import { createAction } from 'redux-act';
import axios from "axios"
import {userDetails} from "./userDetails"


export const USERS_START = createAction('USERS_START');
export const USERS_END = createAction('USERS_END');
export const USERS_DATA = createAction('USERS_DATA');


const usersData = (search, perPage) => {
    return async (dispatch, getState) => {
        if(search){
            axios.get('https://api.github.com/search/users?q='+search+'&per_page='+perPage)
            .then((response) => {
                let userIdArr = []
                response.data.items && response.data.items.forEach(doc=>{
                    userIdArr.push(doc.id)
                })
                dispatch(USERS_DATA({
                    items:userIdArr,
                    total_count: response.data.total_count ? response.data.total_count : 0
                }))

                // get user details
                if(response.data.items){
                    dispatch(userDetails(response.data.items))
                }

            }).catch((error) => {  console.log(error) })
        }else{
            // clear arr
            dispatch(USERS_DATA({
                items:[],
                total_count: 0
            }))
        }
    }
};

export { usersData };