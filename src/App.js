import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Quiz from './Quiz';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: null,
      answer: '',
      selectedAnswer: {},
      selectedScore: '',
    }
  }

  componentWillMount() {
    this.getQuizzes()
  }

  getQuizzes() {
    axios.get('/quizzes')
      .then((response) => {
        this.setState ({
          quizzes: response.data.quizzes[0],
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  getAnswerScores () {
    axios.post('/scores', {
      score: this.state.selectedScore
      })
      .then((response) => {
        this.setState ({
          answer: response.data.score
        })
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleSelectedAnswers (e, score, i) {
    var currentSelectedAnswers = this.state.selectedAnswer

    currentSelectedAnswers[i] = score

    this.setState ({
      selectedAnswer: currentSelectedAnswers
    })
    this.addSelectedAnswers(i)
  }

  addSelectedAnswers(i) {
    const { selectedAnswer } = this.state

    let sum = Object.keys(selectedAnswer).reduce((sum, i) => {
      return sum + parseInt(selectedAnswer[i])
    }, 0)
    this.setState ({
      selectedScore: sum
    })
  }

  render() {
    const { quizzes, answer } = this.state

    return (
      <div
        className="App">

        {quizzes
        ? <Quiz quizzes={quizzes}
          answer={answer}
          getAnswerScores={(e) => this.getAnswerScores(e)}
          handleSelectedAnswers={(e, score, i) => this.handleSelectedAnswers(e, score, i)}/>
        : null}

      </div>
    );
  }
}
