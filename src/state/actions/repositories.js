import { createAction } from 'redux-act';
import axios from "axios"

export const REPOSITORIES_DATA = createAction('REPOSITORIES_DATA');
export const REPOSITORIES_DETAILS = createAction('REPOSITORIES_DETAILS');


const repositoriesData = (search, perPage) => {
    return async (dispatch, getState) => {
        if(search){
            axios.get('https://api.github.com/search/repositories?q='+search+'&per_page='+perPage)
            .then( (response) => {
                let repositoriesArr = []
                response.data.items && response.data.items.forEach(doc=>{
                    repositoriesArr.push({
                        id:doc.id,
                        full_name:doc.full_name,
                        description: doc.description
                    })
                })
                dispatch(REPOSITORIES_DATA({
                    items:repositoriesArr,
                    total_count: response.data.total_count ? response.data.total_count : 0
                }))
            }).catch( (error) => {  console.log(error) })
        }else{
            dispatch(REPOSITORIES_DATA({
                items:[],
                total_count: 0
            }))
        }
    }
};

const repositoriesDetail = (id) => {
    return async (dispatch, getState) => {
        axios.get('https://api.github.com/repositories/'+id)
        .then( async (response) => {
            if(response.data){
                let result = response.data
                // get readme data
                let readMe = await axios.get('https://api.github.com/repos/'+response.data.full_name.split("/")[0]+'/'+response.data.full_name.split("/")[1]+'/readme').catch( (error) => {  console.log(error) })
                if(readMe && readMe.data){
                    result.readMe = readMe.data.content
                }
                // get branches daha
                let branches = await axios.get('https://api.github.com/repos/'+response.data.full_name.split("/")[0]+'/'+response.data.full_name.split("/")[1]+'/branches').catch( (error) => {  console.log(error) })
                if(branches && branches.data){
                    result.branches = branches.data.length
                }
                //get pulls daha
                let pulls = await axios.get('https://api.github.com/repos/'+response.data.full_name.split("/")[0]+'/'+response.data.full_name.split("/")[1]+'/pulls').catch( (error) => {  console.log(error) })
                if(pulls && pulls.data){
                    result.pulls = pulls.data.length
                }

                dispatch(REPOSITORIES_DETAILS(result))



            }else{
                dispatch(REPOSITORIES_DETAILS({}))
            }
        }).catch( (error) => {  dispatch(REPOSITORIES_DETAILS({})); console.log(error) })
    }
};

// const repositoriesReadme = (id) => {
//     return async (dispatch, getState) => {
        
//         axios.get('https://api.github.com/repos/'+id.split("/")[0]+'/'+id.split("/")[1]+'/readme')
//         .then( (response) => {
//             console.log(response.data);
//             if(response.data){
//                 dispatch(REPOSITORIES_README(response.data))
//             }else{
//                 dispatch(REPOSITORIES_README({}))
//             }
//         }).catch( (error) => {  dispatch(REPOSITORIES_README({})); console.log(error) })
//     }
// };

export { repositoriesData, repositoriesDetail};