import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'
import QuizItem from '../QuizItem'
import QuizResult from '../QuizResult'

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      cardIndex: 0,
      correctAnswers: 0,
    }
  }

  handleAwnser = awnser => {
    this.setState(currentState => ({
      correctAnswers: awnser
        ? currentState.correctAnswers + 1
        : currentState.correctAnswers,
      cardIndex: currentState.cardIndex + 1,
    }))
  }

  cleanQuiz = () => {
    this.setState({
      cardIndex: 0,
      correctAnswers: 0,
    })
  }

  render() {
    const { deck, navigation } = this.props
    const { cardIndex, correctAnswers } = this.state

    return (
      <SafeAreaView>
        {cardIndex < deck.cards.length ? (
          <QuizItem
            card={deck.cards[cardIndex]}
            onAnswer={this.handleAwnser}
            current={cardIndex + 1}
            total={deck.cards.length}
          />
        ) : (
          <QuizResult
            deckId={deck.id}
            correctAnswers={correctAnswers}
            total={deck.cards.length}
            navigation={navigation}
            cleanQuiz={this.cleanQuiz}
          />
        )}
      </SafeAreaView>
    )
  }
}

export default connect((state, { navigation }) => ({
  deck: state.decks.decks.find(
    deck => deck.id === navigation.getParam('deckId'),
  ),
}))(Quiz)
