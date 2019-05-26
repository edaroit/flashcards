import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Container, Header, Title } from './styles'
import Deck from '../Deck'
import { loadDecks } from '../../actions/deck'

class Home extends Component {
  componentDidMount() {
    this.props.loadDecks()
  }

  render() {
    const { decks, navigation } = this.props
    const { navigate } = navigation

    return (
      <Container>
        <Header>
          <Title>Flashcards</Title>
        </Header>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <Button
              onPress={() => navigate('DeckDetails', { deckId: item.id })}
            >
              <Deck {...item} />
            </Button>
          )}
          keyExtractor={item => item.id}
        />
      </Container>
    )
  }
}

export default connect(
  state => ({ decks: state.decks.decks }),
  dispatch => bindActionCreators({ loadDecks }, dispatch),
)(Home)
