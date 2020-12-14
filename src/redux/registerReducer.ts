import {registerAPI, regNewUserDataType} from "../api/api-register";

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

// actions
// export const createUser = (newUser: any) =>
//     ({type: 'REGISTER-REDUCER/CREATE-USER', newUser} as const)

export const isRegisteredAC = (isRegistered: boolean) =>
    ({type: 'REGISTER-REDUCER/IS-REGISTERED-AC', isRegistered} as const)

// thunks
export const registerNewUserTC = (newUserData: regNewUserDataType) => (dispatch: any) => {
    registerAPI.regNewUser(newUserData)
        .then( response => {
            if (response.status === 201) {
                dispatch(isRegisteredAC(true));
            } else {
                dispatch(isRegisteredAC(false));
                alert(response.status);
            }
        })
        .catch( (error) => {
            alert(error)
        })
}

// types
type ActionsType =
    | ReturnType<typeof isRegisteredAC>
  //| ReturnType<typeof createUser>