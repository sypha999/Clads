//this store is where the state is managed. 
//this is where the reducers will be fetching data from.
import { createStore } from "redux";
import {reducer} from './reducers';

export const store = createStore(reducer)