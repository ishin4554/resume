
import React, {Component} from 'react';
import { Button, Block, Title, Feature, Tag } from '../../styled';

const Project = props => pug`
  Block
    Title(color='black') ${props.project.title}
    p(className='project__description') ${props.project.description}
    Tag 功能
    ul(className='project')
      ${props.project.features.map((feature, idx) => 
        pug`li ${feature}`  
      )}
    Tag 技術
    ul(className='project')
      ${props.project.techs.map(tech => tech)}
    .link
      Button(href=${props.project.demo} target='_blank') demo
      Button(href=${props.project.repo} target='_blank') github repo
`

export default Project;
