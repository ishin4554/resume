
import React, {Component} from 'react';
import styled from 'styled-components';
import { Title, Link, font, color } from '../../styled';

const Cta = styled.div`
  margin-top: 30px
  border: 2px solid ${color.primary}
  padding: 30px
  margin-bottom: 30px
  h1 {
    text-transform: uppercase
    font-weight: 800
    font-size: $title
    color: ${color.seconadry}
    padding-bottom: 20px
    color: black
    font-style: oblique
  }
  p {
    color: ${color.text}
    margin: 0
  }
` 

const About = props => pug`
  Cta
    Title(color='black') Contact Me
    p 感謝您的閱讀。
    p 工作之餘的我是個 #[span &#127916] 熱愛動畫也 #[Link(href='#') 做動畫] 的創作者，也喜歡寫些文章或舉辦活動分享自己的 #[span &#127881] #[Link(href='#') 學習經驗]。
    p 目前正在找工作當中，如果有興趣的話可以 #[Link(href='#') 聯絡我]、看看 #[Link(href='#') 我的履歷]、或單純說個 #[Link(href='#') 嗨] 也可以喔。
`

export default About;
