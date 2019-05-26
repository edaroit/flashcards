import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCard } from '../../actions/deck'
import { Button, Container, Input } from './styles'

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
      <Container>
        <Input
          value={question}
          placeholder="The Earth is flat?"
          onChangeText={value => this.setState({ question: value })}
        />
        <Input
          value={answer}
          placeholder="No."
          onChangeText={value => this.setState({ answer: value })}
        />
        <Button onPress={() => this.handleSubmit()} title="Send" />
      </Container>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ addCard }, dispatch),
)(NewQuestion)
