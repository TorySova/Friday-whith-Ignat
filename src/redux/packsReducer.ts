import { useSelector } from "react-redux";
import { PacksAPI } from "../api/packs-api";
import { AppStoreType } from "./store";

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
    //дополнить Reducer данными + добавить типы
    packId: null,
    page: 1,
    pageCount: 20,
    userId: null,
    isRequest: false
}

type InitialStateType = typeof initialState;

export const packsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'PACKS_REDUCER/FETCH_PACKS':
            return { ...state, cardPacks: [...action.payload] }
        case 'PACKS_REDUCER/SET_PACK_LINK':
            return { ...state, packId: action.packId }
        case 'PACKS_REDUCER/SET_USER_ID':
            return { ...state, userId: action.userId }
        case 'PACKS_REDUCER/IS-REQUEST-AC':
            return { ...state, isRequest: action.isRequest }
        default:
            return state
    }
}

//actions
export const getPacksAC = (packs: any) => ({ type: 'PACKS_REDUCER/FETCH_PACKS', payload: packs } as const);
export const packIdAC = (packId: any) => ({ type: 'PACKS_REDUCER/SET_PACK_LINK', packId } as const)
export const setUserId = (userId: any) => ({ type: 'PACKS_REDUCER/SET_USER_ID', userId } as const)
const isRequestAC = (isRequest: boolean) => ({type: 'PACKS_REDUCER/IS-REQUEST-AC', isRequest} as const);

// thunks
export const getPacksThunk = () => (dispatch: any, getState: any) => {
    const page = getState().packs.page;
    const pageCount = getState().packs.pageCount;
    const user_id = getState().packs.userId;
    dispatch(isRequestAC(true))
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    PacksAPI.getPacks(user_id, page, pageCount)
        .then(response => {
            console.log(response)
            dispatch(getPacksAC(response.cardPacks))
            dispatch(isRequestAC(false))
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
            //dispatch(getPacksAC(data))
            dispatch(getPacksThunk())
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
            //const data = response.data
            //dispatch(getPacksAC(data))
            dispatch(getPacksThunk())
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
            //const data = response.data
            //dispatch(getPacksAC(data))
            dispatch(getPacksThunk())
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
    | ReturnType<typeof setUserId>
    | ReturnType<typeof isRequestAC>
