import React from 'react';
import WordComponent from './WordComponent';
import './LineComponent.css';

const syllable = require('syllable');

class LineComponent extends React.Component {
  constructor () {
    super();
    this.line = null;
    this.state = {
      syllableCount: 0,
      words: []
    }
    this.update = this.update.bind(this);
  }

  renderWords () {
    const { words } = this.state;

    let wordInputs = words.map(word => 
      <WordComponent onKeyUp={this.update} word={word} />);
    return wordInputs;
  }

  update (evt) {
    const key = evt.target.detail;
    const content = this.line.value;
    const count = syllable(content);

    if (32 === evt.keyCode) {
      // send WORD_DONE event
      const lastWord = content.split(' ').reverse()[0];
      this.state.words.push(lastWord);
    }

    if (count >= 5) {
      // send LINE_DONE event
    }

    this.setState({
      syllableCount: count
    });
  }

  render () {
    return (
      <div>
        <input 
          className="haiku-line"
          ref={node => this.line = node}
          onKeyUp={this.update} />
        <span>{this.state.syllableCount}</span> 
      </div>
    );
  }
}

export default LineComponent;
