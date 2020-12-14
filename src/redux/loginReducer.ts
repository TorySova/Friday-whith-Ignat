import { LoginParamsType } from './../api/login-api';
import { Dispatch } from 'redux'
import { LoginAPI } from '../api/login-api';

export type LoginStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

export const loginInitState: LoginStateType = {
    loading: false,
    success: false,
    error: '',
};

export const loginReducer = (state = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case "login/SET_LOADING": {
            return {
                ...state,
                error: '',
                loading: action.loading,
                success: false
            }
        }
        case "login/SET_ERROR": {
            return{
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case 'login/SET_SUCCESS': {
            return {
                ...state,
                error: '',
                loading: false,
                success: action.success,
            }
        }
        default: return state;
    }
};

export type LoginActionsType = ReturnType<typeof setLoading>
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setError>;

export const setLoading = (loading: boolean) => ({
    type: 'login/SET_LOADING',
    loading,
} as const);


export const setSuccess = (success: boolean) => ({
    type: 'login/SET_SUCCESS',
    success,
} as const);

export const setError = (error: string) => ({
    type: 'login/SET_ERROR',
    error,
} as const)

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<LoginActionsType>) => {
    dispatch(setLoading(true))

    LoginAPI.login(data)
    .then(res => {
        if(res.data.error){
            dispatch(setError(res.data.error))
        } else {
            dispatch(setSuccess(true))
        }
    })
    .catch((e) => {
        const error = e.res ? e.res.data.error : (e.message + ', more detals in the console')
        dispatch(error)
        console.log('Error' ,{...e});
        
    })
}

