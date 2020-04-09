import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardList from "./CardList";
import Card from "./Card";
import { GameOverScreen } from "./GameOverScreen";
import UIfx from "uifx";
import barkDog from "./sounds/bark.mp3";
import barkDog2 from "./sounds/wrong.mp3";
import Fullscreen from "react-full-screen";

const bark = new UIfx(barkDog);
const wrong = new UIfx(barkDog2);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memoryCards: this.shuffleCards(CardList),
      height: window.innerHeight,
      width: window.innerWidth,
      cardOpen: 0,
      openCard: {},
      timer: 0,
      moves: 0,
      won: false,
      landscape: this.isLandscape(),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleResize = (height, event) => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
      landscape: this.isLandscape(),
    });
  };

  isLandscape = () => {
    if (window.innerWidth > window.innerHeight) {
      return true;
    } else {
      return false;
    }
  };

  shuffleCards = (array) => {
    console.log(array);
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    const deck = array.map((card, index) => {
      card.id = index;
      card.solved = false;
      card.faceUp = false;
      return card;
    });
    return deck;
  };

  closeOpenCards() {
    const newCards = this.state.memoryCards.map((card) => {
      if (card.solved) {
        return card;
      } else {
        card.faceUp = false;
        return card;
      }
    });
    return newCards;
  }

  startTimer = () => {
    this.setState({
      startingTime: Date.now(),
    });
    this.timer = setInterval(() => {
      this.setState({
        timer: ((Date.now() - this.state.startingTime) / 1000).toFixed(0),
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  restartGame = () => {
    this.setState({
      memoryCards: this.shuffleCards(CardList),
      height: window.innerHeight,
      width: window.innerWidth,
      cardOpen: 0,
      openCard: {},
      timer: 0,
      moves: 0,
      won: false,
    });
  };

  checkVictory = () => {
    let win = true;
    this.state.memoryCards.forEach((card) => {
      if (!card.solved) {
        win = false;
      }
    });

    if (win) {
      this.stopTimer();
      this.setState({ won: win });
    }
  };

  handleClick = (id) => {
    if (this.state.cardOpen === 0) {
      this.startTimer();
      const temp = this.state.memoryCards;
      temp[id].faceUp = true;
      this.setState({ memoryCards: temp, openCard: temp[id], cardOpen: 1 });
    }
    if (this.state.cardOpen === 1) {
      const temp = this.state.memoryCards;
      const numMoves = this.state.moves;
      if (this.state.openCard.pairId === this.state.memoryCards[id].pairId) {
        temp[id].faceUp = true;
        temp[id].solved = true;
        temp[this.state.openCard.id].solved = true;
        bark.setVolume(0.1).play();
        this.setState({
          memoryCards: temp,
          openCard: {},
          cardOpen: 2,
          moves: numMoves + 1,
        });
        this.checkVictory();
      } else {
        wrong.play();
        temp[id].faceUp = true;
        this.setState({
          memoryCards: temp,
          cardOpen: 2,
          openCard: {},
          moves: numMoves + 1,
        });
      }
    }
    if (this.state.cardOpen === 2) {
      const temp = this.closeOpenCards();
      temp[id].faceUp = true;
      this.setState({ memoryCards: temp, openCard: temp[id], cardOpen: 1 });
    }
  };

  render() {
    return (
      <Fullscreen enabled={true}>
        <Container maxWidth="xl">
          <Grid container direction="column">
            <Grid
              item
              container
              style={{ height: this.state.height / 10 }}
              alignItems="center"
              className="text-2xl text-gray-900"
            >
              <Grid item container xs={6} justify="center">
                <h1>{this.state.timer} seconds</h1>
              </Grid>
              <Grid item container xs={6} justify="center">
                <h1>{this.state.moves} moves</h1>
              </Grid>
            </Grid>

            <Grid
              item
              container
              style={{ height: (this.state.height / 6) * 5 }}
              spacing={1}
            >
              {this.state.memoryCards.map((card) => {
                return (
                  <Card
                    key={card.id}
                    card={card}
                    onClick={this.handleClick}
                    landscape={this.state.landscape}
                  />
                );
              })}
            </Grid>
          </Grid>
          {this.state.won && (
            <GameOverScreen
              time={this.state.timer}
              moves={this.state.moves}
              restartGame={() => this.restartGame()}
            />
          )}
        </Container>
      </Fullscreen>
    );
  }
}

export default App;
