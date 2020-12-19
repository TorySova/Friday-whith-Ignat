import { loginReducer } from './loginReducer';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import {profileReducer} from "./profileReducer";
import { registerReducer } from "./registerReducer";
import {forgotReducer} from "./forgotReducer";
import {setPassReducer} from "./setPasswordReducer";

const reducers = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    register: registerReducer,
    forgot: forgotReducer,
    setPassword: setPassReducer

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store; 