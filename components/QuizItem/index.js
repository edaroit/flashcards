import React, { Component } from 'react'
import {
  Answer,
  AnswerButtons,
  Button,
  Cards,
  Container,
  Question,
} from './styles'

export default class extends Component {
  state = { showAnswer: false }

  render() {
    const { showAnswer } = this.state
    const { card, onAnswer, current, total } = this.props

    return (
      <Container>
        <Cards>
          {current}/{total}
        </Cards>
        <Question>{card.question}</Question>
        <Answer>{showAnswer ? card.answer : ''}</Answer>
        <Button
          title={`${showAnswer ? 'Hide' : 'Show'} Answer`}
          onPress={() => this.setState({ showAnswer: !showAnswer })}
          type="outline"
        />
        <AnswerButtons>
          <Button title="Correct" onPress={() => onAnswer(true)} />
          <Button title="Wrong" onPress={() => onAnswer(false)} />
        </AnswerButtons>
      </Container>
    )
  }
}
