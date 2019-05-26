import styled from 'styled-components/native'

export const Card = styled.View`
  border: 1px solid ${props => props.theme.shadow};
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px ${props => props.theme.shadow};
  background-color: ${props => props.theme.white};
  padding: 20px;
`

export const Count = styled.Text`
  color: ${props => props.theme.lightBlue};
  font-size: 24px;
`

export const Title = styled.Text`
  color: ${props => props.theme.lightBlue};
  font-size: 32px;
`
