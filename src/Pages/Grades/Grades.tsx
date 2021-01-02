import React from "react"
import { useDispatch } from "react-redux";
import { updateGradeOfCard } from "../../redux/cardsReducer";

export const Grades: React.FC<PropsType> = ({cardId}) => {

    const dispatch = useDispatch();

    const gradeOfQuestionHandler = (grade: number) => {
        dispatch(updateGradeOfCard(cardId, grade))
    }

    return (
        <div>
            <button onClick = { () => gradeOfQuestionHandler(1)}>1</button>
            <button onClick = { () => gradeOfQuestionHandler(2)}>2</button>
            <button onClick = { () => gradeOfQuestionHandler(3)}>3</button>
            <button onClick = { () => gradeOfQuestionHandler(4)}>4</button>
            <button onClick = { () => gradeOfQuestionHandler(5)}>5</button>
        </div>
    );
}

//types
type PropsType = {
    cardId: string
}