
import React, {Component} from 'react';
import { Title, Block, Feature, Tag, Description  } from '../../styled';

const Experience = props => pug`
  Block
    div(className='experience__info')
      Title(color='black' isProject='true') 
        a(href=${props.work.url}) ${props.work.name} 
        p ${props.work.time}
      strong ${props.work.title} 
      Description ${props.work.description}
    if props.work.features 
      ul
        ${props.work.features.map((feature, idx) => 
          pug`Feature(key=${idx}) 
            Tag ${feature.title}
            p ${feature.description}`  
        )}
`

export default Experience;
