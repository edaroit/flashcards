import React, { Component } from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCard } from '../../actions/deck'
import { Button } from './styles'

class NewQuestion extends Component {
  constructor() {
    super()
    this.state = {
      question: '',
      answer: '',
    }
  }

  handleSubmit() {
    const { navigation } = this.props
    const { question, answer } = this.state
    const deckId = navigation.getParam('deckId')
    // eslint-disable-next-line react/destructuring-assignment
    this.props.addCard(deckId, { question, answer })
    navigation.goBack()
    this.setState({ question: '', answer: '' })
  }

  render() {
    const { question, answer } = this.state

    return (
      <SafeAreaView>
        <TextInput
          value={question}
          placeholder="What's the worst React derivate?"
          onChangeText={value => this.setState({ question: value })}
        />
        <TextInput
          value={answer}
          placeholder="React Native"
          onChangeText={value => this.setState({ answer: value })}
        />
        <Button onPress={() => this.handleSubmit()} title="Send" />
      </SafeAreaView>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ addCard }, dispatch),
)(NewQuestion)
