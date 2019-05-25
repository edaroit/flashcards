import React from 'react'
import { connect } from 'react-redux'
import { Container } from './styles'
import Deck from '../Deck'

const DeckDetails = ({ deck }) => {
  return (
    <Container>
      <Deck {...deck} />
    </Container>
  )
}

const mapStateToProps = (state, { navigation }) => ({
  deck: state.decks.decks.find(
    deck => deck.id === navigation.getParam('deckId'),
  ),
})

export default connect(mapStateToProps)(DeckDetails)
