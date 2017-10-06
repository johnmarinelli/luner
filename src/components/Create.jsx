import React from 'react';

const syllable = require('syllable');
const sentencer = require('sentencer');
sentencer.configure({
  actions: {
    definite_article: function () { return 'the'; },
    article: function () {
      const articles = ['a', 'an', 'the'];
      return articles[Math.floor(Math.random() * 100) % articles.length];
    }
  }
});

class Line extends React.Component {
  constructor () {
    super();
    this.state = {
      syllableCount: 0,
      words: [],
      limitReached: false
    }
    this.update = this.update.bind(this)
  }

  update (evt) {
    const content = this.refs.line.value,
      words = content.split(' ');
    const syllableCount = syllable(content);

    /*
     * set state
     */
    let newState = { syllableCount, words };

    if (syllableCount >= 5) {
      newState.limitReached = true;  
    }

    this.setState(newState);
  }

  render () {
    const readonly = this.state.limitReached;
    return (
      <div>
        <input 
          ref="line"
          type="text"
          onKeyUp={this.update}
          placeholder="hi default value" 
          readOnly={readonly}
          />
        {this.state.syllableCount}
      </div>
    );
  }
}

const Button = (props) => 
  <button 
    onClick={props.onClickHandler}>
    {props.text}
  </button>;
    

class Create extends React.Component {
  constructor () {
    super();
    this.state = {
    };
    this.inspire = this.inspire.bind(this);
    this.send = this.send.bind(this);
  }

  inspire () {
  }

  send () {
    alert('sending haiku');
  }

  render () {
    return (
      <div className="flex-container">
        <Line ref="first" />
        <Line ref="second" />
        <Line ref="third" />
        <Button
          text="send"
          onClickHandler={this.send} />
        <Button
          text="inspire me"
          onClickHandler={this.inspire} />
      </div>
    );
  }
};

export default Create;
