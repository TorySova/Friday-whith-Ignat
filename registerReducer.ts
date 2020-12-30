import {registerAPI, regNewUserDataType} from "../api/register-api";

const initialState = {
    isRegistered: false,
    isRequest: false,
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'REGISTER-REDUCER/IS-REGISTERED-AC':
            return {...state, isRegistered: action.isRegistered}
        case 'REGISTER-REDUCER/IS-REQUEST-AC':
            return {...state, isRequest: action.isRequest}
        default:
            return state
    }
}

//actions
export const isRegisteredAC = (isRegistered: boolean) => ({type: 'REGISTER-REDUCER/IS-REGISTERED-AC', isRegistered} as const);
export const isRequestAC = (isRequest: boolean) => ({type: 'REGISTER-REDUCER/IS-REQUEST-AC', isRequest} as const);


// thunks
export const registerNewUserTC = (newUserData: regNewUserDataType) => (dispatch: any) => {
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    dispatch(isRequestAC(true))
    registerAPI.regNewUser(newUserData)
        .then( response => {
            if (response.status === 201) {
                dispatch(isRegisteredAC(true));
                dispatch(isRequestAC(false))
            }
        })
        .catch( (error) => {
            //сделать какой-нибудь popup для ошибок
            alert(error.response.data.error);
        })
}

// types
type InitialStateType = typeof initialState;
type ActionsType =
    | ReturnType<typeof isRegisteredAC>
    | ReturnType<typeof isRequestAC>