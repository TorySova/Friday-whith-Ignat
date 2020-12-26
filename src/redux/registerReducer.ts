import {registerAPI, regNewUserDataType} from "../api/register-api";

const initialState = {
    isRegistered: false

}

type InitialStateType = typeof initialState;

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'REGISTER-REDUCER/IS-REGISTERED-AC':
            return {...state, isRegistered: action.isRegistered}
        default:
            return state
    }
}

export const isRegisteredAC = (isRegistered: boolean) =>
    ({type: 'REGISTER-REDUCER/IS-REGISTERED-AC', isRegistered} as const)

// thunks
export const registerNewUserTC = (newUserData: regNewUserDataType) => (dispatch: any) => {
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    registerAPI.regNewUser(newUserData)
        .then( response => {
            if (response.status === 201) {
                dispatch(isRegisteredAC(true));
            }
        })
        .catch( (error) => {
            //сделать какой-нибудь popup для ошибок
            alert(error.response.data.error);
        })
}

// types
type ActionsType =
    | ReturnType<typeof isRegisteredAC>