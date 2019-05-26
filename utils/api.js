import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'Flashcards:decks'

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const decks = JSON.parse(results)
    if (decks === null) return []
    return decks
  })
}

export const postCard = (deckId, card) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const decks = JSON.parse(results)
    const deck = decks.find(d => d.id === deckId)
    const updatedDeck = { ...deck, cards: [...deck.cards, card] }

    AsyncStorage.setItem(
      DECKS_STORAGE_KEY,
      JSON.stringify([...decks.filter(d => d.id !== deckId), updatedDeck]),
    )
  })
}

export const updateDecks = decks =>
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
