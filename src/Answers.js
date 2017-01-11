import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    const { answer } = this.props

    return (
      <div
        className="Answers">

        <input
          type="radio"
        />
        {answer.title}

      </div>
    );
  }
}
