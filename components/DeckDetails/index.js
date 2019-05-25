import React from 'react'
import { connect } from 'react-redux'
import { Button, Container, Count, Title } from './styles'

const DeckDetails = ({ deck, navigation }) => {
  const { title, cards } = deck
  const { navigate } = navigation

  return (
    <Container>
      <Title>{title}</Title>
      <Count>{cards.length}</Count>
      <Button onPress={() => navigate('Quiz')} title="Start a Quiz" />
      <Button
        onPress={() => navigate('NewQuestion')}
        title="Create New Question"
      />
    </Container>
  )
}

const mapStateToProps = (state, { navigation }) => ({
  deck: state.decks.decks.find(
    deck => deck.id === navigation.getParam('deckId'),
  ),
})

export default connect(mapStateToProps)(DeckDetails)
