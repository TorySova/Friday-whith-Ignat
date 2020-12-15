import { loginReducer } from './loginReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from "./profileReducer";

const reducers = combineReducers({
    profile: profileReducer,
    login: loginReducer

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store; 