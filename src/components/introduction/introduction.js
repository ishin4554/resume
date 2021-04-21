
import React, {Component} from 'react';
import './introduction.sass';
import styled, { keyframes } from 'styled-components'
import { Section, Link, font, color } from '../../styled';

const Intro = styled.div`
  overflow: hidden
  position: relative
  padding: 30px
  background: ${color.primary}
  color: ${color.text}
  letter-spacing: 1px
  line-height: 28px
  margin-bottom: 20px
  p {
    margin: 0
  }
  .intro__title {
    color: black
    font-weight: 900
    font-size: ${font.size.title}
    font-style: oblique
  }
  .intro__slogan {
    margin: 0
    color: black
    font-weight: 800
  }
  .intro__contact ul {
    list-style: none
    display: flex
    flex-wrap: wrap
    padding: 0
    li {
      margin-right: 10px
    }
  }
`

const Introduction = props => pug`
  Section
    Intro
      h3(className='intro__title') Min Wei
      p(className='intro__slogan') 從 UX 出發的 Front End Developer
      p(className='intro__info') 嗨，我是魏敏，同時精進於前端開發與使用者研究，期許在兼顧使用者體驗與網站系統品質的同時，打造體驗中的 #[span(className='ixd') Amazing Moment]
      div(className='intro__contact')
        ul
          li 
            Link(href='mailto:minw.contacts@gmail.com' target='_blank') minw.contacts@gmail.com
          li
            Link(href='https://github.com/ishin4554' target='_blank') Github
`

export default Introduction;
