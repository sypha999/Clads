//this file holds the action creators. they are fucntions that must return objects
//or the variables can be objects directly.
import { SAVE_PAYLOAD } from "./actionTypes";

export const savePayLoad = (payLoad)=>({
    type: SAVE_PAYLOAD,
    payload: payLoad
})