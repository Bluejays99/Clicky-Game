import React, { Component } from "react";
import Nav from "./components/Nav";
import sportlogos from "./sportlogos.json";
import Card from "./components/Card";
import "./App.css";

class App extends Component {

  state = {
    sportlogos,
    title: "Sport Logo Memory Game",
    score: 0,
    topScore: 0,
    message: "Click an any Sport Logo to start but don't click on it any more than once!",
    clicked: []
  }

  componentDidMount() {
    this.setState({ maps: this.shuffle(this.state.sportlogos) })
  }

  clickedCard = (id) => {
    console.log(this.state)
    if (this.state.clicked.indexOf(id) === -1) {
      let newClicked = this.state.clicked
      newClicked.push(id)
      let newscore = this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
      this.setState({
        sportlogos: this.shuffle(this.state.sportlogs),
        score: this.state.score + 1,
        topScore: newscore,
        message: "Keep going! You're on your way to a new top score!",
        clicked: newClicked
      })

    }
    else {
      this.setState({
        sportslogos: this.shuffle(this.state.sportlogos),
        score: 0,
        message: "Oh no! You clicked a Sport logo more than once!",
        clicked: [],
      });
    }
  }

  shuffle = sportlogos => {
    // https://stackoverflow.com/a/43235780/10503606

    let newsportlogos = sportlogos.sort(() =>
      Math.random() - 0.5);
    return newsportlogos;
  }

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="sportlogos-container">
          {this.state.maps.map(item => (
            <Card
              sportlogos={item.sportlogos}
              id={item.id}
              img={item.img}
              clickedCard={this.clickedCard}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;