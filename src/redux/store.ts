import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import { registerReducer } from "./registerReducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    profile: profileReducer,
    register: registerReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store; 