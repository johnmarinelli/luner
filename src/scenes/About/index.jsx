import React from 'react';
import { InlineLink, Logo } from '../../components';

import './styles.css';

const About = () => 
  <div className="about">
    <Logo />
    <div>
      <br/>
      <br/>
      A Haiku is an ancient form of Japanese poetry 📝.
      <br/>
      <br/>
      <InlineLink href="/">thehaiku.club</InlineLink> was designed for people to easily start writing their own haikus ✍️.
      <br/>
      <br/>
    </div>
    <div className="haikus">
      <div className="flex-item">
        <div className="displayed-haiku-line">
          a meditation
        </div>
        <div className="displayed-haiku-line">
          on three lines.
        </div>
        <div className="displayed-haiku-line">
          get creative, go!
        </div>
      </div>
    </div>
  </div>

export default About;
