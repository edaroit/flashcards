import React from 'react'
import { connect } from 'react-redux'
import { Button, Container, Cards, Title } from './styles'

const DeckDetails = ({ deck, navigation }) => {
  const { id, title, cards } = deck
  const { navigate } = navigation

  return (
    <Container>
      <Title>{title}</Title>
      <Cards>{cards.length} cards</Cards>
      <Button
        onPress={() => navigate('Quiz', { deckId: id })}
        title="Start a Quiz"
      />
      <Button
        onPress={() => navigate('NewQuestion', { deckId: id })}
        title="Create New Question"
      />
    </Container>
  )
}

export default connect((state, { navigation }) => ({
  deck: state.decks.decks.find(
    deck => deck.id === navigation.getParam('deckId'),
  ),
}))(DeckDetails)
