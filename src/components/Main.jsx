import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { spring, AnimatedRoute, AnimatedSwitch } from 'react-router-transition';
import Create from './Create';
import About from './About';

function mapStyles (styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}


function bounce (val) {
  return spring(val, { stiffness: 330, damping: 22 });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2
  },

  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },

  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

const Main = () => 
  <main>
    <Switch>
      <Route exact path="/" component={Create} />
      <Route path="/about" component={About} />
    </Switch>
  </main>

export default Main;
