import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Quiz from './Quiz';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: null,
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

  render() {
    const { quizzes } = this.state

    return (
      <div
        className="App">

        {quizzes
        ? <Quiz quizzes={quizzes} />
        : null}

      </div>
    );
  }
}
