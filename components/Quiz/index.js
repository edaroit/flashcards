import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import QuizItem from '../QuizItem'
import QuizResult from '../QuizResult'
import {
  clearLocalNotification,
  setLocalNotification,
} from '../../utils/notification'

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      cardIndex: 0,
      correctAnswers: 0,
    }
  }

  async componentDidUpdate() {
    const { cardIndex } = this.state
    const { deck } = this.props
    const totalCards = deck.cards.length

    if (cardIndex === totalCards) {
      await this.delayNotificationUntilTomorrow()
    }
  }

  delayNotificationUntilTomorrow = async () => {
    await clearLocalNotification()
    await setLocalNotification()
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
    const totalCards = deck.cards.length

    return (
      <SafeAreaView>
        {cardIndex < totalCards ? (
          <QuizItem
            card={deck.cards[cardIndex]}
            onAnswer={this.handleAwnser}
            current={cardIndex + 1}
            total={totalCards}
          />
        ) : (
          <QuizResult
            deckId={deck.id}
            correctAnswers={correctAnswers}
            total={totalCards}
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
