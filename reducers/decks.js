import { handleActions } from 'redux-actions'
import { fetchDecks, saveCard, saveDeck } from '../actions/deck'

const initialState = {
  decks: [],
}

const reducer = handleActions(
  {
    [fetchDecks]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [saveCard]: (state, action) => ({
      ...state,
      decks: state.decks.map(deck => {
        if (deck.id === action.payload.deckId) {
          return {
            ...deck,
            cards: [...deck.cards, action.payload.card],
          }
        }

        return deck
      }),
    }),
    [saveDeck]: (state, action) => ({
      ...state,
      decks: [...state.decks, action.payload.deck],
    }),
  },
  initialState,
)

export default reducer
