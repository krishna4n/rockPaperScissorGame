import {
  PlayerContainer,
  CustomButton,
  ResultView,
  ResultLabel,
  EachResultParticipant,
  PlayAgain,
  PlayAgainContainer,
} from './styledComponents'

const Play = props => {
  const {choices, imageSelected, isPlaying, playAgain, result} = props

  console.log(choices)

  const clickedImage = event => {
    imageSelected(event.target.id)
  }

  const clickPlayAgain = () => {
    playAgain()
  }

  return (
    <PlayerContainer>
      {isPlaying && (
        <>
          <CustomButton
            data-testid="rockButton"
            as="img"
            src={choices[0].imageUrl}
            alt={choices[0].id}
            id={choices[0].id}
            onClick={clickedImage}
          />
          <CustomButton
            data-testid="scissorsButton"
            as="img"
            alt={choices[1].id}
            src={choices[1].imageUrl}
            id={choices[1].id}
            onClick={clickedImage}
          />
          <CustomButton
            data-testid="paperButton"
            as="img"
            alt={choices[2].id}
            src={choices[2].imageUrl}
            id={choices[2].id}
            onClick={clickedImage}
          />
        </>
      )}

      {!isPlaying && (
        <PlayerContainer>
          <EachResultParticipant>
            <ResultLabel>YOU</ResultLabel>
            <ResultView as="img" src={choices[0].imageUrl} alt="your choice" />
          </EachResultParticipant>
          <EachResultParticipant>
            <ResultLabel>OPPONENT</ResultLabel>
            <ResultView
              as="img"
              src={choices[1].imageUrl}
              alt="opponent choice"
            />
          </EachResultParticipant>
          <PlayAgainContainer>
            <ResultLabel>{result}</ResultLabel>
            <PlayAgain onClick={clickPlayAgain}>Play Again</PlayAgain>
          </PlayAgainContainer>
        </PlayerContainer>
      )}
    </PlayerContainer>
  )
}

export default Play
