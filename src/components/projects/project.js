
import React, {Component} from 'react';
import { Button, Block, Title, Feature, Tag } from '../../styled';

const Project = props => 
  <Block>
    <Title color="black">{ props.project.title }</Title>
    <p className="project__description">{ props.project.description }</p>
    <Tag>功能</Tag>
    <ul className="project">
      {props.project.features.map((feature, idx) => 
        <li>{feature}</li>  
      )}
    </ul>
    <Tag>技術</Tag>
    <ul className="project">
      {props.project.techs.map(tech => tech)}
    </ul>
    <div className="link">
        <Button href={props.project.demo} target='_blank'>demo</Button>
        {props.project.repo && <Button href={props.project.repo} target='_blank'>github repo</Button>}
    </div>
  </Block>

export default Project;
