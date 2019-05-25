import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Title } from './styles'
import Deck from '../Deck'
import { loadDecks } from '../../actions/deck'

class Home extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.loadDecks()
  }

  render() {
    const { decks } = this.props
    return (
      <Container>
        <Header>
          <Title>Flashcards</Title>
        </Header>
        {decks.map(deck => (
          <Deck {...deck} />
        ))}
      </Container>
    )
  }
}

export default connect(
  state => ({ decks: state.decks.decks }),
  dispatch => bindActionCreators({ loadDecks }, dispatch),
)(Home)
