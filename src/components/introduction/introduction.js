
import React, {Component} from 'react';
import './introduction.sass';
import styled, { keyframes } from 'styled-components'
import { Section, Link, font, color } from '../../styled';

const Intro = styled.div`
  overflow: hidden
  position: relative
  padding: 30px 30px 10px 30px
  background: ${color.primary}
  color: ${color.text}
  letter-spacing: 1px
  line-height: 28px
  margin-bottom: 20px
  .intro__title {
    color: black
    font-weight: 800
    font-style: oblique
  }
  .intro__slogan {
    color: black
    font-weight: 500
  }
  .intro__contact ul {
    list-style: none
    display: flex
    padding: 0
    li {
      margin-right: 10px
    }
  }
`

const Introduction = props => pug`
  Section
    Intro
      h3(className='intro__title') HI
      p(className='intro__slogan') 嗨！我是魏敏，一個從 UX 出發的 Front End Developer
      p(className='intro__info') 2019 年從程式導師計畫與清大服務科學研究所畢業，精進於前端開發與使用者研究，期許開發出兼顧使用者體驗的產品，並打造體驗中的 #[span(className='ixd') Amazing Moment]
      div(className='intro__contact')
        ul
          li 
            Link(href='mailto:minw.contacts@gmail.com') minw.contacts@gmail.com
          li
            Link(href='https://github.com/ishin4554') Github
          li 
            Link(href='') Resume(pdf)
`

export default Introduction;
