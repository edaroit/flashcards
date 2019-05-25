import React from 'react'
import { Count, Title } from './styles'
import Card from '../Card'

export default ({ title = 'ueba', cards = [] }) => (
  <Card>
    <Title>{title}</Title>
    <Count>{cards.lenght}</Count>
  </Card>
)
