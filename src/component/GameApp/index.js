import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {
  AppContainer,
  HeaderContainer,
  Heading,
  Paragraph,
  ScoreContainer,
  ScoreValue,
  CustomButton,
  PopupContainer,
  PopupClose,
  PopupContent,
  PopupImage,
} from './styledComponents'
import Play from '../Play'

class Game extends Component {
  state = {
    selectedId: '',
    choices: [],
    isPlaying: true,
    score: 0,
    randomId: '',
    result: '',
  }

  componentDidMount() {
    this.newList()
  }

  getRandomId = () => {
    const value = Math.floor(Math.random() * 3)
    return value
  }

  getResult = () => {
    const {randomId, selectedId} = this.state
    const {choicesList} = this.props
    const randomText = choicesList[randomId].id
    console.log(selectedId, randomText, randomId)
    if (randomText === selectedId) {
      this.setState({
        result: 'IT IS DRAW',
      })
    } else if (
      (selectedId === 'ROCK' && randomText === 'SCISSORS') ||
      (selectedId === 'SCISSORS' && randomText === 'PAPER') ||
      (selectedId === 'PAPER' && randomText === 'ROCK')
    ) {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  newList = () => {
    const {choicesList} = this.props
    this.setState({
      choices: choicesList,
    })
  }

  imageSelected = id => {
    const {choicesList} = this.props
    const randomNum = this.getRandomId()

    this.setState(
      {
        choices: [
          ...choicesList.filter(each => each.id === id),
          choicesList[randomNum],
        ],

        isPlaying: false,
        selectedId: id,
        randomId: randomNum,
      },
      this.getResult,
    )
  }

  playAgain = () => {
    const {choicesList} = this.props
    this.setState({
      selectedId: '',
      choices: choicesList,
      isPlaying: true,
      randomId: '',
      result: '',
    })
  }

  render() {
    const {isPlaying, choices, score, result} = this.state
    const {choicesList} = this.props
    const newList = choices.length === 0 ? choicesList : choices

    return (
      <AppContainer>
        <HeaderContainer>
          <Heading>ROCK PAPER SCISSORS</Heading>
          <ScoreContainer>
            <Paragraph>Score</Paragraph>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
        </HeaderContainer>

        <Play
          choices={newList}
          imageSelected={this.imageSelected}
          isPlaying={isPlaying}
          playAgain={this.playAgain}
          result={result}
        />

        <PopupContainer>
          <Popup modal trigger={<CustomButton>RULES</CustomButton>}>
            {close => (
              <PopupContent>
                <PopupClose onClick={() => close()}>
                  <RiCloseLine />
                </PopupClose>
                <PopupImage
                  as="img"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                  alt="rules"
                />
              </PopupContent>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default Game
