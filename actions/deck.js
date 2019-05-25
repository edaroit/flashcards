import { createAction } from 'redux-actions'
import { getDecks, postCard, updateDecks } from '../utils/api'

export const fetchDecks = createAction('FETCH_DECKS')
export const saveDeck = createAction('SAVE_DECK')
export const saveCard = createAction('SAVE_CARD')

export const loadDecks = () => async dispatch => {
  const decks = await getDecks()
  return dispatch(fetchDecks({ decks }))
}

export const addDeck = deck => async dispatch => {
  const decks = await getDecks()
  await updateDecks([...decks, deck])
  return dispatch(saveDeck({ deck }))
}

export const addCard = (deckId, card) => async dispatch => {
  await postCard(deckId, card)
  return dispatch(saveCard({ deckId, card }))
}
