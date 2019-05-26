import React from 'react'
import { Card, Count, Title } from './styles'

export default ({ title = '', cards = [] }) => (
  <Card>
    <Title>{title}</Title>
    <Count>{cards.length} cards</Count>
  </Card>
)
