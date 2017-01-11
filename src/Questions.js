import React, { Component } from 'react';

import Answers from './Answers'

export default class Questions extends Component {
  render() {
    const { i, id, title, answers } = this.props

    return (
      <div
        className="Questions">

        <h4
          key={i}>
          {title}
        </h4>

        {answers.map((answer, i) =>
          <Answers
            answer={answer}
            id={id}
            key={i}
          />
        )}

      </div>
    );
  }
}
