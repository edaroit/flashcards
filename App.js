import React from 'react'
import { ThemeProvider } from 'styled-components'
import Router from './components/Router'
import theme from './utils/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
)

export default App
