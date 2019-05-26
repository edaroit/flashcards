import styled from 'styled-components/native'
import { Button as BaseButton } from 'react-native-elements'

export const Answer = styled.Text`
  color: ${props => props.theme.lightBlue};
  font-size: 24px;
  font-weight: 600;
  padding: 4px 0;
`

export const AnswerButtons = styled.View`
  padding: 20px 0;
`

export const Button = styled(BaseButton)`
  margin-top: 10px;
`

export const Cards = styled.Text`
  color: ${props => props.theme.lightBlue};
  font-size: 20px;
  padding: 4px 0;
`

export const Container = styled.View`
  padding: 20px;
`

export const Question = styled.Text`
  color: ${props => props.theme.lightBlue};
  font-size: 32px;
  font-weight: 800;
  padding: 4px 0;
`
