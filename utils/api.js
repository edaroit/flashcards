import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'Flashcards:decks'

export const getDecks = () => AsyncStorage.getItem(DECKS_STORAGE_KEY)

export const postCard = (deck, card) =>
  AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deck]: card,
    }),
  )

export const updateDecks = decks =>
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
