import { createAction } from 'redux-act';
import axios from "axios"

export const USER_DETAILS = createAction('USER_DETAILS');


const userDetails = (items) => {
    return async (dispatch, getState) => {
        items && items.forEach(doc=>{
            axios.get('https://api.github.com/user/'+doc.id).then((response) => {
                if(response.data){
                    dispatch(USER_DETAILS({[response.data.id]: response.data}))
                }
            }).catch((error) => {  console.log(error) })
        })
    }
};

export { userDetails };