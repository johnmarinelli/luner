import React from 'react';
import { InlineLink } from '../../components';

import './styles.css';

const About = () => (
  <div className="about">
    <div>
      is designed
      <br />
      to be a streaming mosaic
      <br />
      of near-anonymous haikus.
      <br />
      <br />
    </div>
    <div className="haikus">
      <div className="flex-item">
        <div className="displayed-haiku-line">a meditation</div>
        <div className="displayed-haiku-line">on three lines.</div>
        <div className="displayed-haiku-line">
          <InlineLink href="/" style={{ color: '#555' }}>
            get creative, go!
          </InlineLink>
        </div>
      </div>
    </div>
  </div>
);

export default About;
