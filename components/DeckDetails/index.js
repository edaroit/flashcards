import React from 'react'
import { connect } from 'react-redux'
import { Button, Container, Count, Title } from './styles'

const DeckDetails = ({ deck }) => {
  const { title, cards } = deck

  return (
    <Container>
      <Title>{title}</Title>
      <Count>{cards.length}</Count>
      <Button title="Start a Quiz" />
      <Button title="Create New Question" />
    </Container>
  )
}

const mapStateToProps = (state, { navigation }) => ({
  deck: state.decks.decks.find(
    deck => deck.id === navigation.getParam('deckId'),
  ),
})

export default connect(mapStateToProps)(DeckDetails)
