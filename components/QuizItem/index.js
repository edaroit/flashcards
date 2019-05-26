import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from './styles'

export default class extends Component {
  state = { showAnswer: false }

  render() {
    const { showAnswer } = this.state
    const { card, onAnswer, current, total } = this.props

    return (
      <View>
        <Text>
          {current}/{total}
        </Text>
        <Text>{card.question}</Text>
        <Text>{showAnswer ? card.answer : ''}</Text>
        <Button
          title={`${showAnswer ? 'Hide' : 'Show'} Answer`}
          onPress={() => this.setState({ showAnswer: !showAnswer })}
        />
        <Button title="Correct" onPress={() => onAnswer(true)} />
        <Button title="Wrong" onPress={() => onAnswer(false)} />
      </View>
    )
  }
}
