import {Dispatch} from "redux";
import {ForgotAPI} from "../api/forgot-api";

export type ForgotStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

export const ForgotInitState: ForgotStateType = {
    loading: false,
    success: false,
    error: "",
};

export const forgotReducer = (state = ForgotInitState, action: ForgotActionsType): ForgotStateType => {
    switch (action.type) {
        case "forgot/SET_ERROR": {
            debugger
            return {
                ...state,
                error: action.error
            }
        }
        case "forgot/SET_LOADING": {
            return {
                ...state,
                loading: action.loading
            }
        }
        case "forgot/SET_SUCCESS": {
            return {
                ...state,
                success: action.success,
            }
        }
        default: {
            return state
        }
    }
};

export type ForgotActionsType = ReturnType<typeof setLoading>
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setError>


export const setLoading = (loading: boolean) => ({
    type: "forgot/SET_LOADING",
    loading,
} as const)
export const setSuccess = (success: boolean) => ({
    type: "forgot/SET_SUCCESS",
    success,
} as const)
export const setError = (error: string) => ({
    type: "forgot/SET_ERROR",
    error,
} as const)

export const forgotTC = (email: string) => (dispatch: Dispatch<ForgotActionsType>) => {
    dispatch(setLoading(true))
    return ForgotAPI.forgot(email)
        .then(() => {
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


