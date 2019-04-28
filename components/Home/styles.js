import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.white};
`

export const Header = styled.SafeAreaView`
  height: 25%;
  background-color: ${props => props.theme.darkBlue};
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${props => props.theme.white};
`
