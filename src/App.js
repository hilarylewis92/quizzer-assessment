import React, { Component } from 'react';
import axios from 'axios';

import Quizzes from './Quizzes'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      quizzes: [],
    }
  }

  componentWillMount() {
    this.getQuizzes()
  }

  getQuizzes() {
    axios.get('/quizzes')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div
        className="App">

        <h2>
          What JavaScript Error Are You?
        </h2>

        <Quizzes />

      </div>
    );
  }
}

export default App;
