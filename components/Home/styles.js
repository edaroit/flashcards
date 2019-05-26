import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity``

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.gray};
`

export const Header = styled.SafeAreaView`
  height: 25%;
  background-color: ${props => props.theme.darkBlue};
  justify-content: center;
`

export const FloatButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.darkBlue};
  position: absolute;
  width: 200;
  height: 50;
  align-items: center;
  justify-content: center;
  border-radius: 30;
  bottom: 20;
  right: 25%;
`

export const FloatText = styled.Text`
  color: ${props => props.theme.white};
  font-size: 18px;
`

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${props => props.theme.white};
`
