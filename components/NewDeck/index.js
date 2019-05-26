import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuid from 'uuid/v4'
import { addDeck } from '../../actions/deck'
import { Button, Container, Input } from './styles'

class NewDeck extends Component {
  state = { title: '' }

  async handleSubmit() {
    const { navigation } = this.props
    const { title } = this.state
    const id = uuid()
    await this.props.addDeck({ id, title })
    navigation.navigate('DeckDetails', { deckId: id })
    this.setState({ title: '' })
  }

  render() {
    return (
      <Container>
        <Input
          placeholder="Title"
          onChangeText={value => this.setState({ title: value })}
        />
        <Button onPress={() => this.handleSubmit()} title="Send" />
      </Container>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ addDeck }, dispatch),
)(NewDeck)
