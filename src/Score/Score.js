import React, { Component } from 'react';
import axios from 'axios';


import './Score.css'

let round = [
  [// round
    [// group
      [// team
        {// person
          name: 'A',
          win: true,
          score: 20
        },
        {// person
          name: 'B',
          win: false,
          score: 6
        }
      ],
      [// team
        {// person
          name: 'Ag',
          win: false,
          score: 0
        },
        {// person
          name: 'Bn',
          win: true,
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

export default class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      round: []
    }
  }
  componentWillMount() {
    // console.log('发送ajax')
    let that = this
    axios.get('https://www.dartsunion.com:7474/dartsworld/match/group?id=' + this.props.match.params.id)
      .then(function (response) {
        console.log(response)
        that.setState({
          round: response.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="score score-main">
        {
          this.state.round.map((round, round_index) => (
            <div key={round_index} className="round-part">
              <div key={round_index} className="round">
                第{round_index + 1}轮
              </div>
              {
                this.state.round[round_index].map((group, group_index) => (
                  <div className="group" key={group_index}>
                    <div>
                      第{group_index + 1}组
                    </div>
                    {
                      group.map((team, team_index) => (

                          <div key={team_index} className="team">
                            <div className="person">
                              <div className="victory">
                                {
                                  team[0].win
                                    ?
                                      <div className="win-logo">
                                        <img src={require('./win@2x.png')}/>
                                      </div>
                                    :
                                    <div className="win-logo"></div>
                                }
                              </div>

                              <div className="part">
                                <div className="name">{team[0].name}</div>
                                <div className="score">{team[0].score}</div>
                              </div>
                            </div>
                            <div className="vs">vs</div>
                            <div className="person">
                              <div className="part">
                                <div className="name">{team[1].name}</div>
                                <div className="score">{team[1].score}</div>
                              </div>
                              <div className="victory">
                                {
                                  team[1].win
                                    ?
                                      <div className="win-logo">
                                        <img src={require('./win@2x.png')}/>
                                      </div>
                                    :
                                    <div className="win-logo"></div>
                                }
                              </div>
                            </div>
                          </div>

                      ))
                    }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }
}
