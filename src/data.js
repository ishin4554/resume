import React, {Component} from 'react';
import { Highlight } from './styled';

export const educations = [
  {
    name: '清大服務科學研究所',
    url: 'https://www.iss.nthu.edu.tw/',
    title: '服務創新與設計模組與商業分析模組',
    time: '2017.09 - 2019.06',
    description: pug`p 學習使用者研究中質化與量化等研究工具，擔任 
      a(href='https://medium.com/@minw/%E6%80%9D%E8%80%83%E8%A8%AD%E8%A8%88%E6%80%9D%E8%80%83%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%9D%8A-%E4%B8%80%E6%AC%A1%E8%B3%AA%E5%95%8F%E7%9A%84%E6%97%85%E7%A8%8B-d8bdbd27faa0' target='_blank') #[Highlight 果物配合作設計工作坊] 
      | 設計負責人，與 #[Highlight 巨城] 以及 #[Highlight 新竹縣政府] 合作參與服務創新專案，並開發 #[Highlight 候選人專頁發言主題數據視覺化網站] 。`,
    features: [
      {
        title: '探索性研究',
        description: '專家、使用者及焦點訪談、觀察法、文化探針包、工作坊設計'
      },
      {
        title: '評估性研究',
        description: '易用性測試、A/B Test、社群網路分析、文字探勘'
      },
      {
        title: '設計工具',
        description: 'Sketch、Figma、Framer、Photoshop、Illustrator、After Effect、Premiere'
      },
    ],
  },
]

export const works = [
  {
    name: '股感 Stockfeel',
    url: 'https://www.stockfeel.com.tw/',
    title: '前端工程師 | 全職',
    time: '2019.12 - 2021.01',
    description: '參與導入 Vue 開發會員系統調整 Webpack 加入 wordpress 架構改善網頁讀取效能，使用 d3.js 與 highcharts.js 開發主題投資、區域市場、個股頁面所需等多種資料視覺化形式，並使用 xState, rx.js 開發 drag & drop 互動搜尋介面。同時亦參與保險業客服人員後台重製切版，使用 Vue 進行開發，並協助易用性測試執行，與行銷活動網頁製作，利用 GSAP 製作動畫效果。',
  },
  {
    name: '應用劇本實驗室',
    url: 'http://www.scenariolab.com.tw/',
    title: '使用者研究員 | 實習',
    time: '2018.07 - 2018.09',
    description: '協助醫電產業客戶作使用者研究與服務設計，執行包含醫療、保全產業的專家訪談，與病患的使用者訪談，並舉辦服務設計教育訓練工作坊，為公司導入服務設計觀念。',
  },
  {
    name: 'Sketch Share 社繪學',
    url: 'https://sketch-share.firebaseapp.com/',
    title: '使用者研究員 | 兼任',
    time: '2018.02 - 2018.06',
    description: `對高中、大學的年輕繪圖自學族群進行使用者訪談以及產品的易用性測試，並對現行的繪圖教學資源平台進行 UX 競品分析。
    同時接收內部主視覺與動態設計的設計需求。`,
  },
  {
    name: 'Hahow 好學校',
    url: 'https://hahow.in/',
    title: '專案開發 | 實習',
    time: '2015.02 - 2016.02',
    description: '參與開發圖文不符資訊設計、動態網頁互動設計等課程，協助課程老師設計與執行課程計畫。',
  }
]

export const projects = [
  {
    title: 'Lidemy',
    description: '程式導師計畫',
    features: [
      "協助開發與維護課程學習系統中作業批改與課程總覽等前後端。",
      "架設開源溝通平台 mattermost 供計畫內部使用。",
      "擔任第四期課程助教協助 code review 錄製 CSS 實作技巧相關課程。",
      "開發課程中互動遊戲教材，包含：網站基礎挑戰 php 遊戲與開發入門 cheat sheet。",
      "負責規劃與開發網頁開發知識地圖平台（進行中）"
    ],
    techs: [
      pug`li 學習系統前端使用 #[Highlight React] 搭配 #[Highlight Redux] 來做狀態管理，並用 #[Highlight Redux Observable] 來處理非同步的 Action。`,
      pug`li 學習系統後端使用 #[Highlight Express] 搭配 #[Highlight Sequelize ORM] 來存取 MySQL DB，並設計 #[Highlight RESTiful API] 以 #[Highlight jwt] 來做認證與前端溝通。`,
      pug`li Mattermost 架設在 AWS EC2 上並搭配 SES 作為通知信服務，與 S3 作為資料庫備份使用。`
    ],
    demo: 'https://lidemy.com/',
    repo: 'https://github.com/Lidemy'
  },
  {
    title: 'VNote',
    description: '線上課程影片的雲端筆記服務',
    features: [
      "跟隨課程影片時間筆記，支援分類、搜尋、留下筆記，及回覆留言跟按讚等社群功能。",
      "管理課程影片，編輯標題跟敘述，並設定完成、未完成課程。",
      "共享課程筆記給其他人，透過 Email 新增共享人。",
      "以 Markdown 格式匯出筆記，同步到其他筆記服務。"
    ],
    techs: [
      pug`li 前端使用 #[Highlight React] 搭配 #[Highlight Redux] 來做狀態管理，並用 #[Highlight Redux Observable] 來處理非同步的 Action。`,
      pug`li 後端使用 #[Highlight Express] 搭配 #[Highlight Mongoose ODM] 來存取 Mongo DB，並設計 #[Highlight RESTiful API] 以 #[Highlight jwt] 來做認證與前端溝通。`,
      pug`li 測試使用 #[Highlight JEST] 做單元測試並以 TDD 的方式進行開發，搭配 #[Highlight ESLint] 確保程式碼品質。`
    ],
    demo: 'https://vnotenow.herokuapp.com/',
    repo: 'https://github.com/ishin4554/VNote'
  },
  {
    title: "Min's Blog",
    description: '個人技術分享部落格，內容涵蓋：',
    features: [
      "前端：JavaScript、SSG、CSS、State Management、Functional Programming",
      "資料視覺化：d3.js、WebGL"
    ],
    techs: [
      pug`li 使用 Gatsby.js 作為靜態網頁產生器進行開發，搭配 Styled Component 來做樣式管理。`,
    ],
    demo: 'https://minw.blog/',
  },
]