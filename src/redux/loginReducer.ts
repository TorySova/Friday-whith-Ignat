import { setProfileAC } from './profileReducer';
import { LoginParamsType } from './../api/login-api';
import { Dispatch } from 'redux'
import { LoginAPI } from '../api/login-api';

export type LoginStateType = {
    isLoggedIn: boolean;
    error: string
}

export const loginInitState: LoginStateType = {
    isLoggedIn: false,
    error: ''
};

export const loginReducer = (state = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case "login/SET_IS_LOGGED_IN": {
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            }
        }
        case 'login/SET_ERROR': {
            return {
                ...state,
                error: action.error
            }
        }
        default: return state;
    }
};

export type LoginActionsType = ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setError> | ReturnType<typeof setProfileAC>

export const setIsLoggedIn = (isLoggedIn: boolean) => ({
    type: 'login/SET_IS_LOGGED_IN',
    isLoggedIn,
} as const);

export const setError = (error: string) => ({
    type: 'login/SET_ERROR',
    error
} as const);

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<LoginActionsType>) => {

    return LoginAPI.login(data)
        .then(res => {
            if (res.data.error) {
                dispatch(setError(res.data.error))
            } else {
                dispatch(setProfileAC(res.data))
                dispatch(setIsLoggedIn(true))
            }
        })
        .catch((e) => {
            dispatch(setError(e.response.data.error + ' more details in the console'))
            console.log('Error:', { ...e });
        })
}


