import React from 'react';
import { connect } from 'react-redux';
import { haikuLineKeyUp, haikuAuthorKeyUp } from './actions';
import { Input } from '../../components';
import { Row, AddHaiku, Header } from './components/';
import { fetchDictionaries, spellCheckLines } from './services';

import './styles.css';

let typo = null;

const syllable = require('syllable');

const mapStateToProps = (state) => {
  return state.rootReducer.createHaiku;
}

class Home extends React.Component {

  focusNextInput (index) {
    if (index < this.rows.length - 1) {
      this.rows[index + 1].focus();
    }
    else this.author.focus();
  }

  validateInputs () {
    const lines = this.rows.map(row => row.line.props.lineContent);
    return spellCheckLines(typo, lines);
  }

  clearInputs () {
    this.rows.forEach(row => row.clearInput());
  }

  setFirstChar (index, c) {
    if (index < this.rows.length - 1) {
      this.rows[index + 1].setFirstChar(c);
    }
  }

  onLineKeyUp (index, evt) {
    const content = evt.target.value;
    const syllables = syllable(content);
    const maxSyllableCount = +evt.target.getAttribute('maxsyllablecount');
    
    if (syllables <= maxSyllableCount) {
      /*
       * focus the next row when 
       * space or enter key was pressed at max syllable count
       */
      if (syllables === maxSyllableCount 
           && (evt.keyCode === 32 || evt.keyCode === 13)) {
        this.focusNextInput(index);
      }
      this.props.dispatch(haikuLineKeyUp(content, syllables, index));
    }
    else {
      /*
       * focus the next row when 
       * a character key was pressed and the syllable count > maxSyllableCount
       */
      evt.target.value = this.props.lines[index].content.trim();
      this.focusNextInput(index);

      /*
       * hackish solution to auto enter the next character.  
       * does not correctly set syllable count for next row.
       */
      this.setFirstChar(index, content.split('').reverse()[0]);
    }
  }

  onAuthorKeyUp (evt) {
    const author = evt.target.value;
    this.props.dispatch(haikuAuthorKeyUp(author));
  }

  constructor () {
    super();
    this.rows = new Array(3).fill(null);
    this.focusNextInput = this.focusNextInput.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.authorInput = null;
  }

  componentDidMount () {
    if (null === typo) {
      fetchDictionaries().then(t => typo = t);
    }
  }

  render () {
    let { lines } = this.props;

    return (
      <div className="lines flex-container">
        <Header />
        <Row 
          ref={row => this.rows[0] = row}
          onLineKeyUp={this.onLineKeyUp.bind(this, 0)}
          index={0} 
          syllables={lines[0].syllables}
          lineContent={lines[0].content}
          maxSyllableCount={5} />
        <Row 
          ref={row => this.rows[1] = row}
          onLineKeyUp={this.onLineKeyUp.bind(this, 1)}
          index={1} 
          syllables={lines[1].syllables}
          lineContent={lines[1].content}
          maxSyllableCount={3} />
        <Row 
          ref={row => this.rows[2] = row}
          onLineKeyUp={this.onLineKeyUp.bind(this, 2)}
          index={2} 
          syllables={lines[2].syllables}
          lineContent={lines[2].content}
          maxSyllableCount={5} />
        <label className="author-wrapper row-wrapper">
          <span className="label" htmlFor="author">
            -
          </span>
          <Input
            onKeyUp={this.onAuthorKeyUp.bind(this)}
            maxLength={15}
            ref={input => this.author = input}
            id="author"
            htmlname="author"
            className="line"
            placeholder="anonymous"
            defaultValue="anonymous" />
        </label>
        <AddHaiku 
          clearInputs={this.clearInputs} 
          validateInputs={this.validateInputs} />
      </div>
    );
  }
};

export default connect(mapStateToProps, null)(Home);
