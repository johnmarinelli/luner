import React from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import { Home, Haikus, About } from '../../../../../index';

import './styles.css';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

function bounce(val) {
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

const Main = () => (
  <main>
    <AnimatedSwitch
      mapStyles={mapStyles}
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
    >
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/browse-haikus/:filter?" component={Haikus} />
    </AnimatedSwitch>
  </main>
);

export default Main;
