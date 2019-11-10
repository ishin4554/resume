import React, {Component} from 'react';
import { Highlight } from './styled';

export const educations = [
  {
    name: 'LIDEMY 程式導師計畫',
    url: 'https://github.com/Lidemy/mentor-program-3rd',
    title: '第三期畢業生',
    time: '2019.04 - 2019.10',
    description: pug`p 完成 24 週課程與 2 週的課程專題，並學習 #[Highlight 前端框架、優化及後端開發與資料庫設計]，加強 #[Highlight 資安、網路、瀏覽器] 等基礎知識，養成現代工程師足以持續精進自我的自學能力。`,
    features: [
      {
        title: '前端',
        description: 'React(Redux, rxjs) Pug, Sass, ES6, Web Optimization'
      },
      {
        title: '後端',
        description: 'Node.js(Express), PHP(Code Igniter), SQL DB(MySQL), NoSQL DB(Mongo), RESTiful API Design'
      },
      {
        title: '網頁工程',
        description: 'Webpack, Gulp, Unit Test(Jest), E2E Test(Cypress), Travis CI'
      },
    ],
  },
  {
    name: '清大服務科學研究所',
    url: 'https://www.iss.nthu.edu.tw/',
    title: '創新設計與商業分析模組',
    time: '2017.09 - 2019.06',
    description: pug`p 學習使用者研究中質化與量化等研究工具，並與 #[Highlight 巨城]、#[Highlight 果物配] 以及 #[Highlight 新竹縣政府] 合作以參與式設計執行服務創新專案。`,
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
        description: 'Sketch、Photoshop、Illustrator、After Effect、Premiere'
      },
    ],
  },
]

export const works = [
  {
    name: '應用劇本實驗室',
    url: 'http://www.scenariolab.com.tw/',
    title: '使用者研究員 | 實習',
    time: '2018.07 - 2018.09',
    description: '協助美思醫電作使用者研究與服務設計，執行包含醫療、保全產業的專家訪談 ，與病患的使用者訪談，並舉辦服務設計教育訓練工作坊，為公司導入服務設計觀念。',
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
    name: '墨雨設計',
    url: 'http://monoame.com/#/',
    title: '網頁設計 | Freelance',
    time: ' 2015 -',
    description: '協助設計活動網頁與網頁的動態設計，並制定 Wireframe 與撰寫文件，並結合動態互動創造令人印象深刻的品牌印象。',
  },
  {
    name: 'Hahow 好學校',
    url: 'https://hahow.in/',
    title: '專案開發 | 實習',
    time: '2015.02 - 2016.02',
    description: '於課程募資平台中，參與開發新的課程並接觸第一線的老師，協助老師開課。',
  }
]

export const projects = [
  {
    title: 'VNote',
    description: '針對線上影片的雲端筆記服務',
    features: [
      "以影片時間為基礎留言，可以分類、搜尋、留下筆記，並留下子留言跟按讚",
      "管理課程影片，編輯標題跟敘述，並設定完成、未完成課程",
      "共享課程筆記給其他人，透過 email 新增共享人",
      "以 markdown 格式匯出筆記，同步到其他筆記服務"
    ],
    techs: [
      pug`li 前端使用 #[Highlight React] 框架，使用 #[Highlight Redux] 來做狀態管理，並用 #[Highlight Redux Observable] 來處理非同步的 Action。使用 #[Highlight React-Router] 做路徑管理。`,
      pug`li 後端使用 #[Highlight Express] 框架，並用 #[Highlight Mongoose ODM] 來存取 Mongo DB，並設計 #[Highlight RESTiful API] 以 #[Highlight jwt] 來做認證與前端溝通，並部署在 Heroku 上。`,
      pug`li 測試使用 #[Highlight JEST] 做單元測試並以 TDD 的方式進行開發，用 #[Highlight ESLint] 確保程式碼品質。`
    ],
    demo: '#',
    repo: '#'
  },
  {
    title: 'ISHIN',
    description: '個人作品集特效型網站',
    features: [
      "支援 CRUD 的文章系統，以 tag 為基礎做文章分類",
      "支持 markdown 語法發佈文章",
      "landing 特效畫面與滑鼠互動效果",
    ],
    techs: [
      pug`li 利用 #[Highlight Canvas] 開發 landing 效果，過場使用 #[Highlight react csstransition group] 開發，並用 #[Highlight svg] 來做滑鼠互動，`, 
      pug`li 前端使用 #[Highlight React], #[Highlight Redux], #[Highlight Redux Observable] 與 #[Highlight React-Router] 進行開發。`,
      pug`li 後端使用 #[Highlight Express] 框架，並用 #[Highlight Sequelize ODM] 來存取 MySQL DB。`,
    ],
    demo: '#',
    repo: '#'
  },
  {
    title: 'MTR3:Challenge',
    description: '網站觀念闖關遊戲',
    features: [
      "以 query 作為闖關條件的網站遊戲",
      "MUD 文字遊戲風格介面"
    ],
    techs: [
      pug`li 利用 #[Highlight jQuery] 與 #[Highlight SASS] 開發網站互動效果。`, 
      pug`li 後端使用 #[Highlight PHP] 來寫伺服器，並部署在 #[Highlight AWS EC2] 上進行測試，最後發佈在 #[Highlight Heroku] 上。`,
    ],
    demo: '#',
    repo: '#'
  },
  {
    title: '候選人粉專主題大體檢',
    description: '總統候選人的粉專發文內容主題比例視覺化',
    features: [
      "數據視覺化不同候選人在粉專上的主題比例",
      "支持數據註解與匿名留言"
    ],
    techs: [
      pug`li 前端利用 #[Highlight d3.js] 開發數據視覺化的視圖，並用 #[Highlight jQuery] 來做互動。`, 
      pug`li 後端使用 #[Highlight Firebase] 來存取資料跟部署。`,
    ],
    demo: '#',
    repo: '#'
  },
]