import { loginReducer } from './loginReducer';
import { combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";

const reducers = combineReducers({
    profile: profileReducer,
    login: loginReducer

});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store; 