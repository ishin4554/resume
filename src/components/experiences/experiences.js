
import React, {Component} from 'react';
import Experience from './experience';
import { Title, Section } from '../../styled';

const Experiences = props => pug`
  Section
    Title ${props.title}
    ${props.works.map((work, idx) => 
      pug`Experience(key=${idx} work=${work})`  
    )}
`

export default Experiences;
