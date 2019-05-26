import styled from 'styled-components/native'
import { Button as BaseButton } from 'react-native-elements'

export const Button = styled(BaseButton)`
  padding-top: 10px;
`

export const Cards = styled.Text`
  color: ${props => props.theme.lightBlue};
  font-size: 32px;
`

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.gray};
  padding: 20px;
`

export const Title = styled.Text`
  color: ${props => props.theme.lightBlue};
  font-size: 48px;
  font-weight: bold;
`
