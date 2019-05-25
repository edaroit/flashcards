import styled from 'styled-components/native'
import { Button as BaseButton } from 'react-native-elements'

export const Button = styled(BaseButton)``

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.gray};
`

export const Count = styled.Text`
  color: ${props => props.theme.lightBlue};
`

export const Title = styled.Text`
  color: ${props => props.theme.lightBlue};
`
