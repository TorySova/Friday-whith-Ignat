import {Dispatch} from "redux";
import {SetPassAPI} from "../api/setPassword-api";

export type SetPassStateType = {
    loading: boolean
    success: boolean
    error: string
}

export const SetPassInitState: SetPassStateType = {
    loading: false,
    success: false,
    error: "",
}

export const setPassReducer = (state = SetPassInitState, action: SetPassActionsType): SetPassStateType => {
    switch (action.type) {
        case "setPassword/SET_ERROR": {
            return {
                ...state,
                error: action.error
            }
        }
        case "setPassword/SET_LOADING": {
            return {
                ...state,
                loading: action.loading,
            }
        }
        case "setPassword/SET_SUCCESS": {
            return {
                ...state,
                success: action.success,
            }
        }
        default: {
            return state
        }
    }
}

export type SetPassActionsType = ReturnType<typeof setLoading>
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setError>


export const setLoading = (loading: boolean) => ({type: "setPassword/SET_LOADING", loading} as const)
export const setSuccess = (success: boolean) => ({type: "setPassword/SET_SUCCESS", success} as const)
export const setError = (error: string) => ({type: "setPassword/SET_ERROR", error} as const)


export const setPasswordTC = (token: string, password: string, pass2: string) => async (dispatch: Dispatch<SetPassActionsType>) => {
    dispatch(setLoading(true));
    if (password !== pass2) dispatch(setError("Passwords don't match!"))
    else {
        return SetPassAPI.setPass(token, password)
            .then (() => {
                dispatch(setSuccess(true))
            })
            .catch((e) => {
                dispatch(setError(e.response.data.error + ' more details in the console'))
                console.log('Error: ', e.response.data.error)
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
};