//this will hold pure js fucntions that update the state by taking state and action as parameters
//this is actually where the state is modified
import { SAVE_PAYLOAD } from "./actionTypes";
import { savePayLoad } from "./actions";

const initialState = {
    token: ''
};

export const reducer = (state=initialState, action) => {

    switch(action.type){
        case SAVE_PAYLOAD:
            return {...state, token: action.payload}
            default:
                return state
    };

}