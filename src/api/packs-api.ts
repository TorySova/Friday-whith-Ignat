import { instance } from "./instance";


export const PacksAPI = {
    getPacks(user_id: string, page: number, pageCount: number) {
        return instance.get(`cards/pack/?`+ (user_id != null ? `user_id=${user_id}` : ``) + `&page=${page}` + `&pageCount=${pageCount}`).then(res => res.data)
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