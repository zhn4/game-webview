路由
```javascript
// 首页，显示已创建的赛事
<Route exact path='/dashboard' component={Dashboard}/>
let game = [// 需要数据
  {
    id: 1,
    title: '兴盛路冬季飞镖比赛',
    address: '广州市天河区珠江新城兴盛路HappyMonk酒吧',
    time: '11月22日  19：00'
  },
  {
    id: 2,
    title: '兴盛路冬季飞镖比赛2',
    address: '广州市天河区珠江新城兴盛路HappyMonk酒吧',
    time: '11月22日  19：00'
  }
]

// 添加赛事页面
<Route exact path='/add' component={Add}/>
let game = {
  titleThree: '激烈的',
  titleOne: '兴盛路冬季飞镖比赛2',
  titleTwo: '飞镖比赛',
  time: '2017.12.5',
  max: '20',
  money: '20',
  contact: '李老板',
  phone: '110',
  ps: '注意准时',
  first: '100元',
  second: '80元',
  third: '50元',
  fourth: '啤酒',
  people: []// 添加赛事为空数组，下面添加人员时候再补充
}

// 修改赛事页面，可添加参赛人员
// 获取上面的数据，作修改。再补充people数组
<Route exact path='/edit/:id' component={Add}/>

// 由修改赛事页面进入，给参赛人员分组
<Route exact path='/group/:id' component={Group}/>
let round = [
  [// round
    [// group
      [// team
        {// person
          name: 'A',
          win: true,
          score: 0
        },
        {// person
          name: 'B',
          win: false,
          score: 0
        }
      ],
      [// team
        {// person
          name: 'A',
          win: true,
          score: 0
        },
        {// person
          name: 'B',
          win: false,
          score: 0
        }
      ]
    ],
    [// group
      [// team
        {// person
          name: 'AA',
          win: false,
          score: 0
        },
        {// person
          name: 'BA',
          win: false,
          score: 0
        }
      ]
    ]
  ],
  [// round
    [// group
      [// team
        {// person
          name: 'C',
          win: false,
          score: 0
        },
        {// person
          name: 'D',
          win: false,
          score: 0
        }
      ]
    ]
  ]
]
```
