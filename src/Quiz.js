import React, { Component } from 'react';
import Questions from './Questions.js'

export default class Quiz extends Component {

  render() {
    const { quizzes, getAnswerScores, answer, handleSelectedAnswers } = this.props

    return (

      <div className="Quiz">

        <h2>
          {quizzes.title}
        </h2>

        {quizzes.questions.map((question, i) =>
          <Questions
            title={question.title}
            answers={question.answers}
            id={question.id}
            handleSelectedAnswers={(e, score) => handleSelectedAnswers(e, score, i)}
          />
        )}

        <section>
          {answer}
        </section>

        <button
          onClick={(e) => getAnswerScores(e)}>
          submit
        </button>

      </div>
    );
  }
}
