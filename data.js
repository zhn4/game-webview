// 创建赛事,post
let data = {
  titleThree: '引题',
  titleOne: '主标题',
  titleTwo: '副标题',
  time: '时间',
  max: '最大参赛人数',
  money: '参赛费',
  contact: '联系人',
  phone: '联系人电话',
  ps: '备注',
  first: '冠军奖励',
  second: '亚军奖励',
  third: '季军奖励',
  fourth: '殿军奖励',
  peoples: []// 保留，赛事创建后添加
}

// 赛事创建后添加参赛人员,post
let peoples = ['郭xx', '李xx', '郭xxx', '邓xx', '黄x', '钟xx']

// 比赛分组，可修改比赛数据,post
let game = [
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
