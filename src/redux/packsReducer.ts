import { PacksAPI } from "../api/packs-api";

const initialState: any = {
    cardPacks: [
        {
            _id: null,
            user_id: null,
            name: null,
            path: null,
            cardsCount: null,
            grade: null,
            shots: null,
            rating: null,
            type: null,
            created: null,
            updated: null,
            __v: null,
        },
    ],
    //дополнить Reducer данными
    packId: null
}

type InitialStateType = typeof initialState;

export const packsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PACKS_REDUCER/FETCH_PACKS':
            return { ...state, cardPacks: [...action.payload] }
        case 'PACKS_REDUCER/SET_PACK_LINK':
            return { ...state, packId: action.packId }
        default:
            return state
    }
}

//actions
export const getPacksAC = (packs: any) => ({ type: 'PACKS_REDUCER/FETCH_PACKS', payload: packs } as const);
export const packIdAC = (packId: any) => ({ type: 'PACKS_REDUCER/SET_PACK_LINK', packId } as const)

// thunks
export const getPacksThunk = () => (dispatch: any) => {
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    PacksAPI.getPacks()
        .then(response => {
            console.log(response)
            dispatch(getPacksAC(response.cardPacks))
        })
        .catch((e) => {
            //сделать какой-нибудь popup для ошибок
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error);
        })
}

export const createPackThunk = () => (dispatch: any) => {
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    PacksAPI.createPack()
        .then(response => {
            console.log(response)
            const data = response.data
            dispatch(getPacksAC(data))
        })
        .catch((e) => {
            //сделать какой-нибудь popup для ошибок
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error);
        })
}

export const updatePackThunk = (id: string) => (dispatch: any) => {
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    PacksAPI.updatePack(id)
        .then(response => {
            console.log(response)
            const data = response.data
            dispatch(getPacksAC(data))
        })
        .catch((e) => {
            //сделать какой-нибудь popup для ошибок
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error);
        })
}

export const deletePackThunk = (id: string) => (dispatch: any) => {
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    PacksAPI.deletePack(id)
        .then(response => {
            console.log(response)
            const data = response.data
            dispatch(getPacksAC(data))
        })
        .catch((e) => {
            //сделать какой-нибудь popup для ошибок
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error);
        })
}

// types
type ActionsType =
    | ReturnType<typeof getPacksAC>
    | ReturnType<typeof packIdAC>

export type PackType = {
    _id: string | null
    user_id: string | null
    name: string | null
    path: string | null
    cardsCount: number | null
    grade: number | null
    shots: number | null
    rating: number | null
    type: string | null
    created: Date | null
    updated: Date | null
    __v: number | null
}
