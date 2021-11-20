import INCREMENT_COUNT from "./action"

const initial=0;

const incrementReducer = (state=initial,action)=>{
    if(action.type === INCREMENT_COUNT ){

        return state+2;

    }
    else return state;

}

export default incrementReducer