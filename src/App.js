import React, {Component} from 'react';
import * as data from './data';
import Introduction from './components/introduction';
import Projects from './components/projects';
import Experiences from './components/experiences';
import About from './components/about';
import './index.sass';

class App extends Component{
  render (){
    return pug`
      main(className='main')
        Introduction(id='introduction')
        Projects(projects=${data.projects})
        Experiences(works=${data.educations} title='education')
        Experiences(works=${data.works} title='work experience')
        About
    `;
  }
}

export default App;
