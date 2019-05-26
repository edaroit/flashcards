/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Button } from './styles'

export default ({ cleanQuiz, deckId, correctAnswers, total, navigation }) => {
  const { navigate } = navigation

  return (
    <SafeAreaView>
      <Text>
        Its Over {correctAnswers}/{total} correct
      </Text>
      <Button title="Restart Quiz" onPress={cleanQuiz} />
      <Button
        title="Back to Deck"
        onPress={() => navigate('DeckDetails', { deckId })}
      />
    </SafeAreaView>
  )
}
