import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    const { id, answer } = this.props

    return (
      <div
        className="Answers">

        <label>
          <input
            type="radio"
            value={answer.score}
            name={id}
          />
          {answer.title}
        </label>

      </div>
    );
  }
}
