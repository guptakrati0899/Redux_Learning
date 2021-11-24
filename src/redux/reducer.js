import INCREMENT_COUNT, { SAVE_USER } from "./action"

const initial ={
    user:'0'
}

const incrementReducer = (state=initial,action={})=>{
    if(action.type === INCREMENT_COUNT ){

        return state;

    }
    else if (action.type ===SAVE_USER){
        return {
            ...action.payload
        }
    }
    else return state;

}

export default incrementReducer