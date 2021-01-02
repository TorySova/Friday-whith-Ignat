import { instance } from "./instance"


export const CardsAPI = {
    getCards(cardsPack_id: any, page: any, pageCount: any) {
        return instance.get(`/cards/card` + `/?cardsPack_id=${cardsPack_id}` + `&page=${page}` + `&pageCount=${pageCount}`)
            .then(res => res.data)
    },
    createCard(newCard: any) {
        return instance.post('cards/card', { card: newCard })
            .then(res => res.data)
    },
    updateCard(CurrentCard: any) {
        return instance.put('cards/card', { card: CurrentCard })
            .then(res => res.data)

    },
    deleteCard(cardId: string) {
        return instance.delete(`cards/card` + `/?id=${cardId}`)
            .then(res => res.data)
    }
}