import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middlewares'
import Router from './components/Router'
import theme from './utils/theme'
import { setLocalNotification } from './utils/notification'

const store = createStore(reducer, middleware)

export default class extends Component {
  async componentDidMount() {
    await setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    )
  }
}
