import React, {Component} from 'react';
import * as data from './data';
import Introduction from './components/introduction';
import Projects from './components/projects';
import Experiences from './components/experiences';
import './index.sass';

class App extends Component{
  render (){
    return pug`
      main(className='main')
        Introduction(id='introduction')
        Experiences(works=${data.works} title='work experience')
        Projects(projects=${data.projects})
        Experiences(works=${data.educations} title='education')
    `;
  }
}

export default App;
