import { createAction } from 'redux-actions'
import { getDecks, postCard, updateDecks } from '../utils/api'

export const fetchDecks = createAction('FETCH_DECKS')
export const saveDeck = createAction('SAVE_DECK')
export const saveCard = createAction('SAVE_CARD')

export const loadDecks = () => async dispatch => {
  const response = await getDecks()
  const decks = JSON.parse(response)
  return dispatch(fetchDecks({ decks }))
}

export const addDeck = deck => async dispatch => {
  const response = await getDecks()
  const decks = JSON.parse(response)
  await updateDecks([...decks, deck])
  return dispatch(saveDeck({ deck }))
}

export const addCard = (deck, card) => async dispatch => {
  await postCard(deck, card)
  return dispatch(saveCard({ deck, card }))
}
