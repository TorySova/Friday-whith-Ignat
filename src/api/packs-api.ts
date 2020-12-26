import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true
    //baseURL: "https://neko-back.herokuapp.com/2.0/"
});

export const PacksAPI = {
    getPacks() {
        return instance.get('cards/pack').then(res => res.data)
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

//types
export type CardPacksType = {
    _id: string
    user_id?: string
    name: string
    path?: string
    cardsCount: number
    grade?: number
    shots?: number
    rating?: number
    type?: string
    created?: string
    updated: string
    __v?: number
}