import styled from 'styled-components/native'
import { Button as BaseButton, Input as BaseInput } from 'react-native-elements'

export const Button = styled(BaseButton)`
  margin-top: 20px;
  padding: 10px;
`

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.gray};
`

export const Header = styled.SafeAreaView`
  height: 25%;
  background-color: ${props => props.theme.darkBlue};
  justify-content: center;
  margin-bottom: 15px;
`

export const Input = styled(BaseInput)``

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${props => props.theme.white};
`
