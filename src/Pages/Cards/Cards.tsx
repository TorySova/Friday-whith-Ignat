import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Table } from "../../common/Table/Table";
import { createCardThunk, deleteCardThunk, getCardsThunk, updateCardThunk } from "../../redux/cardsReducer";
import { AppStoreType } from "../../redux/store";
import { PATH } from "../../Routes";

export const Cards = () => {

    const dispatch = useDispatch();

    const getCardsData = (state: AppStoreType) => {
        return state.cards.cards.map((card: any) => ({
            id: card._id,
            answer: card.answer,
            question: card.question,
            cardsPack_id: card.cardsPack_id,
            grade: card.grade,
            rating: card.rating,
            user_id: card.user_id,
        }))
    }

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn);
    const cardsData = useSelector((state: AppStoreType) => getCardsData(state));
    const isLinkToCards = false;

    const getCards = () => {
        dispatch(getCardsThunk());
    }
    const addCard = () => {
        dispatch(createCardThunk())
    }
    const updateCard = (cardId: string) => {
        dispatch(updateCardThunk(cardId))
    }
    const deleteCard = (cardId: string) => {
        dispatch(deleteCardThunk(cardId))
    }

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }

    return (
        <div>
            {/* сделать дизейбл кнопок */}
            <button onClick={getCards}>GET CARDS</button>
            <button onClick={addCard}>ADD CARD</button>
            <Table
                header={cardsData[0]}
                data={cardsData}
                update={updateCard}
                delete={deleteCard} 
                isLinkToCards={isLinkToCards}
            />
        </div>
    )
}