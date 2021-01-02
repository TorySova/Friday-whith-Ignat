import React, {useEffect, useState} from "react"
import {Grades} from "../Grades/Grades";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redux/store";
import {CardType, getCardsThunk} from "../../redux/cardsReducer";

// export const Learn = () => {
//     const cardId = "sdafsdf"
//
//     return (
//         <div>
//             <Grades cardId={cardId}/>
//         </div>
//     );
// }

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

export const Learn = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    const cards = useSelector((state: AppStoreType) => state.cards.cards);
    // const {cardId} = useSelector((state: AppStoreType) => state.cards.cards._id);
    // const {id}: any = useParams();

    const [card, setCard] = useState<CardType>({
        _id: 'fake',
        cardsPack_id: '',

        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,

        type: '',
        rating: 0,
        more_id: '',

        created: '',
        updated: '',

        __v: '',
    });

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (first) {
            dispatch(getCardsThunk());
            setFirst(false);
        }

        console.log('cards', cards)
        if (cards.length > 0) setCard(getCard(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, card._id, cards, first]);

    const onNext = () => {
        setIsChecked(false);

        if (cards.length > 0) {
            debugger
            setCard(getCard(cards));
        } else {

        }
    }

    return (
        <div>
            LearnPage

            <div>{card.question}</div>
            <div>
                <button onClick={() => setIsChecked(true)}>check</button>
            </div>

            {isChecked && (
                <>
                    <div>{card.answer}</div>

                    <div>
                        <Grades cardId={card._id}/>
                    </div>

                    <div><button onClick={onNext}>next</button></div>
                </>
            )}
        </div>
    );
};
