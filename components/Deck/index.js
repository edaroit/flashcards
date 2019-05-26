import React from 'react'
import { Count, Title } from './styles'
import Card from '../Card'

export default ({ title = '', cards = [] }) => (
  <Card>
    <Title>{title}</Title>
    <Count>{cards.length} cards</Count>
  </Card>
)
