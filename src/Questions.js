import React, { Component } from 'react';

import Answers from './Answers'

export default class Questions extends Component {
  render() {
    const { id, title, answers } = this.props

    return (
      <div
        className="Questions">

        <h4>
          {title}
        </h4>

        {answers.map(answer =>
          <Answers
            answer={answer}
            id={id}
          />
        )}

      </div>
    );
  }
}
