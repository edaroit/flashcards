import React from 'react'
import { Answers, Button, Buttons, Container, Text } from './styles'

export default ({ cleanQuiz, deckId, correctAnswers, total, navigation }) => {
  const { navigate } = navigation

  return (
    <Container>
      <Text>Correct Answers:</Text>
      <Answers>
        {correctAnswers}/{total}
      </Answers>
      <Buttons>
        <Button title="Restart Quiz" onPress={cleanQuiz} />
        <Button
          title="Back to Deck"
          onPress={() => navigate('DeckDetails', { deckId })}
        />
      </Buttons>
    </Container>
  )
}
