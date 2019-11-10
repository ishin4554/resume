
import React, {Component} from 'react';
import Project from './project';
import { Title, Section } from '../../styled';

const Projects = props => pug`
  Section
    Title projects
    ${props.projects.map((project, idx) => 
      pug`Project(key=${idx} project=${project})`  
    )}
`

export default Projects;
