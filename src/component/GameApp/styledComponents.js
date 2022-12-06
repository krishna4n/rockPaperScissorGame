import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  padding: 20px;
`
export const HeaderContainer = styled.div`
  padding: 10px;
  margin-top: 10px;
  width: 70vw;
  border: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`
export const RulesContainer = styled.div``

export const Paragraph = styled.p`
  font-weight: 600;
  font-size: 14px;
`
export const ScoreValue = styled(Paragraph)`
  font-size: 22px;
  font-family: Roboto;
`

export const Heading = styled.h4`
  width: 20px;
`

export const ScoreContainer = styled.div`
  text-align: center;
  height: 12vh;
  width: 8vw;
  border-radius: 10px;
  color: #223a5f;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CustomButton = styled.button`
  align-self: flex-end;
  background-color: #ffffff;
  padding: 10px;
  color: #223a5f;
  border: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 5px;
`
export const PopupContainer = styled.div`
  align-self: flex-end;
`

export const PopupClose = styled.button`
  align-self: flex-end;
`

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const PopupImage = styled.div``
