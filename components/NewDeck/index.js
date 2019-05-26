import React, { Component } from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuid from 'uuid/v4'
import { addDeck } from '../../actions/deck'
import { Button } from './styles'

class NewDeck extends Component {
  constructor() {
    super()
    this.state = { title: '' }
  }

  async handleSubmit() {
    const { navigation } = this.props
    const { title } = this.state
    const id = uuid()
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.addDeck({ id, title })
    navigation.navigate('DeckDetails', { deckId: id })
    this.setState({ title: '' })
  }

  render() {
    const { title } = this.state

    return (
      <SafeAreaView>
        <TextInput
          value={title}
          placeholder="React Native Studies"
          onChangeText={value => this.setState({ title: value })}
        />
        <Button onPress={() => this.handleSubmit()} title="Send" />
      </SafeAreaView>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ addDeck }, dispatch),
)(NewDeck)
