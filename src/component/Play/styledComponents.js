import styled from 'styled-components'

export const PlayerContainer = styled.div`
  margin-top: 10px;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const TopContent = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CustomButton = styled.input`
  width: 15vw;
`
export const ResultView = styled(CustomButton)`
  margin: 20px;
`
export const ResultLabel = styled.p``

export const EachResultParticipant = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const PlayAgain = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-weight: 600;
`

export const PlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
