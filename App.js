import React from 'react'
import { ThemeProvider } from 'styled-components'
import Home from './components/Home'
import theme from './utils/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
)

export default App
