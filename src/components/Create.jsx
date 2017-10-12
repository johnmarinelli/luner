import React from 'react';
import { connect } from 'react-redux';
import { haikuLineKeyUp } from '../action-creators';
import AddHaiku from './presentation/AddHaiku';
import Row from './presentation/Row';

const syllable = require('syllable');

const Button = (props) => 
  <button 
    onClick={props.onClickHandler}>
    {props.text}
  </button>;

const Buttons = (props) => 
  <div className="flex-container">
    <AddHaiku />
    <Button
      text="inspire me"
      onClickHandler={props.inspire} />
  </div>

const mapStateToProps = (state) => state.haikuApp.haiku;

class Create extends React.Component {

  focusNextInput (index) {
    //console.log(ReactDOM.findDOMNode(
  }

  onLineKeyUp (index, evt) {
    /*
     * enter
     */
    if (evt.keyCode === 13) {
    }

    const content = evt.target.value;
    const syllables = syllable(content);
    
    if (syllables <= +evt.target.getAttribute('maxsyllablecount')) {
      this.props.dispatch(haikuLineKeyUp(content, syllables, index));
    }
    else {
      evt.target.value = this.props.lines[index].content.trim();
    }
  }

  render () {
    console.log(this.props);
    let { lines } = this.props;

    return (
      <div className="lines flex-container">
        <Row 
          onLineKeyUp={this.onLineKeyUp.bind(this, 0)}
          index={0} 
          syllables={lines[0].syllables}
          maxSyllableCount={5} />
        <Row 
          onLineKeyUp={this.onLineKeyUp.bind(this, 1)}
          index={1} 
          syllables={lines[1].syllables}
          maxSyllableCount={3} />
        <Row 
          onLineKeyUp={this.onLineKeyUp.bind(this, 2)}
          index={2} 
          syllables={lines[2].syllables}
          maxSyllableCount={5} />
        <Buttons 
          inspire={this.inspire} />
      </div>
    );
  }
};

export default connect(mapStateToProps, null)(Create);
