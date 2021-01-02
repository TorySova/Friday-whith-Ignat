import { instance } from "./instance";
import {PackType} from "../redux/packsReducer";

export type ResponseGetPacksType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number | null
    maxCardsCount: number | null
    minCardsCount: number | null
    page: number | null
    pageCount: number | null
}

export const PacksAPI = {
    getPacks(params: any) {
        return instance.get<ResponseGetPacksType>(`/cards/pack`
            + (params.userId != null ? `/?user_id=${params.userId}&` : '/?')
            + (params.packName != null ? `packName=${params.packName}&` : '')
            + (params.min != null ? `min=${params.min}&` : '')
            + (params.max != null ? `max=${params.max}&` : '')
            + (params.sortPacks != null ? `sortPacks=${params.sortPacks}&` : '')
            + (params.page != null ? `page=${params.page}&` : '')
            + (params.pageCount != null ? `pageCount=${params.pageCount}&` : '')
        )
            .then(res => res.data)
    },
    createPack() {
        return instance.post('cards/pack', {
            cardsPack: {
                name: "created new TestPack",
            }
        })
            .then(res => res.data);
    },
    updatePack(id: string) {
        return instance.put('cards/pack', {
            cardsPack: {
                _id: id,
                name: "Pack was updated!",
            }
        }).then(res => res.data)
    },
    deletePack(id: string) {
        return instance.delete(`cards/pack?id=${id}`)
            .then(res => res.data)
    }
}