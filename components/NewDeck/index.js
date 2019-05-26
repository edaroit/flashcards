import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuid from 'uuid/v4'
import { addDeck } from '../../actions/deck'
import { Button, Container, Header, Input, Title } from './styles'

class NewDeck extends Component {
  state = { title: '' }

  async handleSubmit() {
    const { navigation } = this.props
    const { title } = this.state
    const id = uuid()
    await this.props.addDeck({ id, title })
    this.setState({ title: '' })
    navigation.navigate('DeckDetails', { deckId: id })
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Flashcards</Title>
        </Header>
        <Input
          placeholder="Important Subject"
          onChangeText={value => this.setState({ title: value })}
        />
        <Button onPress={() => this.handleSubmit()} title="Submit" />
      </Container>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ addDeck }, dispatch),
)(NewDeck)
