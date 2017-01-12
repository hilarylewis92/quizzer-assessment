import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    const { answer, handleSelectedAnswers, id } = this.props


    return (
      <div
        className="Answers">

        <input
          type="radio"
          name={id}
          onClick={(e) => handleSelectedAnswers(e, answer.score)}
        />
        {answer.title}

      </div>
    );
  }
}
