import React, { Component } from 'react';
import Questions from './Questions.js'

export default class Quiz extends Component {

  render() {
    const { quizzes } = this.props

    return (

      <div className="quiz-container">

        <header>
          <h2>{quizzes[0].title}</h2>
        </header>

        {quizzes[0].questions.map((question, i) =>
          <Questions
            title={question.title}
            answers={question.answers}
            id={question.id}
            i={i}
          />
        )}

        <input
          className="submit-button"
          type="submit"
          value="submit"
        />

        <input
          className="submit-button"
          type="submit"
          value="clear"
        />

      </div>
    );
  }
}
