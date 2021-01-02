import {PacksAPI} from "../api/packs-api";

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
    currentPage: 1,
    pageCount: 10,
    totalCount: null as string | null,
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

        case 'PACKS_REDUCER/SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'PACKS_REDUCER/SET-TOTAL-COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'PACKS_REDUCER/SET-PAGE-COUNT': {
            debugger
            return {...state, totalCount: action.pageCount}
        }

        default:
            return state
    }
}

//actions
export const getPacksAC = (packs: any) => ({ type: 'PACKS_REDUCER/FETCH_PACKS', payload: packs } as const);
export const packIdAC = (packId: any) => ({ type: 'PACKS_REDUCER/SET_PACK_LINK', packId } as const)
export const setUserId = (userId: any) => ({ type: 'PACKS_REDUCER/SET_USER_ID', userId } as const)

const isRequestAC = (isRequest: boolean) => ({type: 'PACKS_REDUCER/IS-REQUEST-AC', isRequest} as const);


export const setCurrentPageAC = (currentPage: number) => ({type: 'PACKS_REDUCER/SET-CURRENT-PAGE', currentPage} as const)
export const setTotalCountAC = (totalCount: number | null) => ({type: 'PACKS_REDUCER/SET-TOTAL-COUNT', totalCount} as const)
export const setPageCountAC = (pageCount: number) => ({type: 'PACKS_REDUCER/SET-PAGE-COUNT', pageCount} as const)

// thunks
export const getPacksThunk = () => (dispatch: any, getState: any) => {
    const params = {
        userId: getState().packs.userId,
        packName: getState().search.searchByName,
        min: getState().search.minCount,
        max: getState().search.maxCount,
        sortPacks: '0updated',
        page: getState().packs.currentPage,
        pageCount: getState().packs.pageCount,
    }

    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    PacksAPI.getPacks(params)
        .then(response => {
            console.log(response)
            dispatch(getPacksAC(response.cardPacks))

            dispatch(isRequestAC(false))

            dispatch(setTotalCountAC(response.cardPacksTotalCount))

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

    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setPageCountAC>

export type PackType = {
    cardsCount: number | null
    created: Date | null
    deckCover: string | null
    grade: number | null
    more_id: string | null
    name: string | null
    path: string | null
    private: boolean
    rating: number | null
    shots: number | null
    type: string | null
    updated: Date | null
    user_id: string | null
    user_name: string | null
    __v: number | null
    _id: string | null
}

