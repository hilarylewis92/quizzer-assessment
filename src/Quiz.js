import React, { Component } from 'react';
import Questions from './Questions.js'

export default class Quiz extends Component {

  render() {
    const { quizzes } = this.props

    return (

      <div className="Quiz">

        <h2>
          {quizzes.title}
        </h2>

        {quizzes.questions.map(question =>
          <Questions
            title={question.title}
            answers={question.answers}
          />
        )}

        <button>
          submit
        </button>

        <button>
          clear
        </button>

      </div>
    );
  }
}
