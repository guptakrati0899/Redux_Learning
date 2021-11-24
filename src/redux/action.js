import axios from 'axios';

export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const SAVE_USER ='SAVE_USER';
// export const incrementCount =() =>({
    
//         type:INCREMENT_COUNT,
//         payload:{

//         }
//     }) 

const saveUser =(user) => ({
    type:SAVE_USER,
    payload : user
})


export const getTitle =() => (dispatch,getState) =>{
    console.log("action fired",getState());
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response =>{
        console.log("response is",response.data);
        dispatch(saveUser(response.data))
    }).catch()
}

    export default INCREMENT_COUNT;
