import { CardsAPI } from "../api/cards-api";
import { gradesAPI } from "../api/grades-api";

const initialState: any = {
  cards: [
    {
      answer: null,
      question: null,
      cardsPack_id: null,
      grade: null,
      rating: null,
      shots: null,
      type: null,
      user_id: null,
      created: null,
      updated: null,
      __v: null,
      _id: null,
    },
  ],
  //дополнить Reucer данными + добавить типы
  page: 1,
  pageCount: 20,
};

export const cardsReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "CARDS_REDUCER/FETCH_CARDS":
      return { ...state, cards: [...action.payload] };
    case "GRADES_REDUCER/UPDATE_GRADE_OF_CARD":
      return {
        ...state,
        cards: state.cards.map((card: any) => {
          if (card._id === action.payload.updatedGrade.card_id) {
            return {
              ...card,
              grade: action.payload.updatedGrade.grade,
              shots: action.payload.updatedGrade.shots,
            };
          } else {
            return card;
          }
        }),
      };
    default:
      return state;
  }
};

//actions
export const getCardsAC = (cards: any) =>
  ({ type: "CARDS_REDUCER/FETCH_CARDS", payload: cards } as const);
export const updateGradeOfCardAC = (data: any) =>
  ({ type: "GRADES_REDUCER/UPDATE_GRADE_OF_CARD", payload: data } as const);

//thunks
export const getCardsThunk = () => (dispatch: any, getState: any) => {
  const cardsPack_id = getState().packs.packId;
  const page = getState().cards.page;
  const pageCount = getState().cards.pageCount;
  console.log(cardsPack_id);
  //добавить крутилку + дисейбл кнопки (не забыть убрать!)
  CardsAPI.getCards(cardsPack_id, page, pageCount)
    .then((response) => {
      console.log(response);
      dispatch(getCardsAC(response.cards));
    })
    .catch((e) => {
      //сделать какой-нибудь popup для ошибок
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      console.log(error);
    });
};

export const createCardThunk = () => (dispatch: any, getState: any) => {
  const packId = getState().packs.packId;
  console.log(packId);
  const newCard = {
    cardsPack_id: packId,
  };
  //добавить крутилку + дисейбл кнопки (не забыть убрать!)
  CardsAPI.createCard(newCard)
    .then((response) => {
      console.log(response);
      //dispatch(getCardsAC(response.cards))
      dispatch(getCardsThunk());
    })
    .catch((e) => {
      //сделать какой-нибудь popup для ошибок
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      console.log(error);
    });
};

export const updateCardThunk = (cardId: string) => (dispatch: any) => {
  const currentCard = {
    _id: cardId,
    question: "Test question for update current card",
  };
  //добавить крутилку + дисейбл кнопки (не забыть убрать!)
  CardsAPI.updateCard(currentCard)
    .then((response) => {
      console.log(response);
      //dispatch(getCardsAC(response.cards))
      dispatch(getCardsThunk());
    })
    .catch((e) => {
      //сделать какой-нибудь popup для ошибок
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      console.log(error);
    });
};

export const deleteCardThunk = (cardId: string) => (dispatch: any) => {
  //добавить крутилку + дисейбл кнопки (не забыть убрать!)
  CardsAPI.deleteCard(cardId)
    .then((response) => {
      console.log(response);
      //dispatch(getCardsAC(response.cards))
      dispatch(getCardsThunk());
    })
    .catch((e) => {
      //сделать какой-нибудь popup для ошибок
      const error = e.response
        ? e.response.data.error
        : e.message + ", more details in the console";
      console.log(error);
    });
};

export const updateGradeOfCard = (cardId: string, grade: number) => (dispatch: any) => {
    const data = {
        grade: grade,
        card_id: cardId
    }
    //добавить крутилку + дисейбл кнопки (не забыть убрать!)
    gradesAPI.updateGrade(data)
        .then(response => {
            console.log(response)
            //dispatch(getCardsAC(response.cards))
            dispatch(updateGradeOfCardAC( {
                updatedGrade: {
                    cardId: response.data.updatedGrade.card_id,
                    grade: response.data.updatedGrade.grade,
                    shots: response.data.updatedGrade.shots,
                }
            }))
        })
        .catch((e) => {
            //сделать какой-нибудь popup для ошибок
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log(error);
        })
}

//types
type InitialStateType = typeof initialState;
type ActionsType =
  | ReturnType<typeof getCardsAC>
  | ReturnType<typeof updateGradeOfCardAC>;
