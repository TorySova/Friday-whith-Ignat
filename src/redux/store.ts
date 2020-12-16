import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from "./profileReducer";
import {forgotReducer} from "./forgotReducer";

const reducers = combineReducers({
    profile: profileReducer,
    forgot: forgotReducer

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store; 