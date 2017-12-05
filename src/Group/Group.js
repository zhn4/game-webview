import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';


import './Group.css'

let score = []
for(let num = 0; num <= 32; num++) {
  score.push(num)
}

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

export default class Group extends Component {
  constructor(props) {
    super(props)
    this.state = {
      round: [],
      people_list: ['陈', '李', '郭', '周', '司徒', '黄'],
      score: score
    }
  }
  componentWillMount() {
    let that = this
    axios.get('https://www.dartsunion.com:7474/dartsworld/match/edit?id=' + this.props.match.params.id)
      .then(function (response) {
        console.log(response)
        that.setState({
          people_list: response.data.people
        })
      })
      .catch(function (error) {
        console.log(error)
      })
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
  addRound() {
    console.log('增加轮')
    let new_round = this.state.round
    let new_group = []
    new_round.push(new_group)
    this.setState({
      round: new_round
    })
  }
  addGroup(i) {
    console.log('增加组')
    let round = this.state.round
    let group = round[i]
    let team = []
    group.push(team)
    this.setState({
      round: round
    })
  }
  addTeam(i, e) {
    // console.log(this.state.round)
    console.log('增加队')
    let round = this.state.round
    let current_round = round[e.target.dataset.round_index]
    console.log(round)
    let group = current_round[e.target.dataset.group_index]
    console.log(group)
    let team = [
      {// person
        name: '',
        win: false,
        score: 0
      },
      {// person
        name: '',
        win: false,
        score: 0
      }
    ]
    group.push(team)
    console.log(round)
    this.setState({
      round: round
    })
  }
  changeSelectName(i, e) {
    console.log('选择对手')
    let round = this.state.round
    let current_round = round[e.target.dataset.round_index]
    let current_group = current_round[e.target.dataset.group_index]
    let current_team = current_group[e.target.dataset.team_index]
    let current_person = current_team[e.target.dataset.person_index]
    current_person.name = e.target.value
    this.setState({
      round: round
    })
  }
  changeScore(i, e) {
    console.log('修改分数')
    let round = this.state.round
    let current_round = round[e.target.dataset.round_index]
    let current_group = current_round[e.target.dataset.group_index]
    let current_team = current_group[e.target.dataset.team_index]
    let current_person = current_team[e.target.dataset.person_index]
    current_person.score = e.target.value
    this.setState({
      round: round
    })
  }
  changeWin(i, e) {
    console.log('修改胜利状态')
    // console.log(e.target.value)
    let round = this.state.round
    let current_round = round[e.target.dataset.round_index]
    let current_group = current_round[e.target.dataset.group_index]
    let current_team = current_group[e.target.dataset.team_index]
    let current_person = current_team[e.target.dataset.person_index]
    // current_person.win = e.target.value
    if(current_person.win === true) {
      current_person.win = false
    }else {
      current_person.win = true
    }
    // console.log(current_person.win)
    this.setState({
      round: round
    })
  }
  deleteTeam(i, e) {
    let round = this.state.round
    let current_round = round[e.target.dataset.round_index]
    // console.log(round)
    let group = current_round[e.target.dataset.group_index]
    // console.log(group)
    // group.push(team)
    group.splice(e.target.dataset.team_index, 1)
    console.log(round)
    this.setState({
      round: round
    })
  }
  deleteGroup(i, e) {
    console.log('删除组')
    let round = this.state.round
    let current_round = round[e.target.dataset.round_index]
    // console.log(round)
    // console.log(current_round)
    current_round.splice(e.target.dataset.group_index, 1)
    this.setState({
      round: round
    })
  }
  deleteRound(i, e) {
    console.log('删除轮')
    let round = this.state.round
    // console.log(round)
    round.splice(e.target.dataset.round_index, 1)
    // console.log(round)
    this.setState({
      round: round
    })
  }
  submit() {
    console.log(this.state.round)
    // 发送分组ajax
    let that = this
    axios.post('https://www.dartsunion.com:7474/dartsworld/match/group?id=' + this.props.match.params.id, JSON.stringify({
      id: that.props.match.params.id,
      round: that.state.round
    }))
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  render() {
    return (
      <div className="groups">
        <h1>分组</h1>
        {
          this.state.round.map((round, round_index) => (
            <div key={round_index} className="">
              <h2 key={round_index}>
                {round_index + 1}轮
                <div className="delete-round" data-round_index={round_index} onClick={this.deleteRound.bind(this, round_index)}>X</div>
              </h2>
              {
                this.state.round[round_index].map((group, group_index) => (
                  <div className="group" key={group_index}>
                    <div>
                      第{group_index + 1}组
                      <div className="delete-group" data-round_index={round_index} data-group_index={group_index} onClick={this.deleteGroup.bind(this, group_index)}>X</div>
                    </div>
                    {
                      group.map((team, team_index) => (
                        <div key={team_index}>
                          <div className="team">
                            <div className="person">
                              <div className="victory">
                                <div>胜利</div>
                                {
                                  team[0].win
                                    ?
                                      <div data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="0" className="game-state win-state" data-win="false" onClick={this.changeWin.bind(this, team_index)} ></div>
                                    :
                                    <div data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="0" className="game-state" data-win="false" onClick={this.changeWin.bind(this, team_index)} ></div>
                                }
                              </div>

                              <div className="part">
                                <select data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="0" onChange={this.changeSelectName.bind(this, team_index)} >
                                  <option value="0">{team[0].name}</option>
                                  {
                                    this.state.people_list.map((name, i) => (
                                      <option key={i} value={name}>{name}</option>
                                    ))
                                  }
                                </select>
                                <select data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="0" onChange={this.changeScore.bind(this, team_index)} >
                                  <option value="0">{team[0].score}</option>
                                  {
                                    this.state.score.map((num, num_index) => (
                                      <option key={num_index} value={num}>{num}</option>
                                    ))
                                  }
                                </select>
                              </div>
                            </div>
                            <span>vs</span>
                            <div className="person">
                              <div className="part">
                                <select data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="1" onChange={this.changeSelectName.bind(this, team_index)}>
                                  <option value="0">{team[1].name}</option>
                                  {
                                    this.state.people_list.map((name, i) => (
                                      <option key={i} value={name}>{name}</option>
                                    ))
                                  }
                                </select>
                                <select data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="1" onChange={this.changeScore.bind(this, team_index)} >
                                  <option value="0">{team[1].score}</option>
                                  {
                                    this.state.score.map((num, num_index) => (
                                      <option key={num_index} value={num}>{num}</option>
                                    ))
                                  }
                                </select>
                              </div>
                              <div className="victory">
                                <div>胜利</div>
                                {
                                  team[1].win
                                    ?
                                      <div data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="1" className="game-state win-state" data-win="false" onClick={this.changeWin.bind(this, team_index)} ></div>
                                    :
                                    <div data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="1" className="game-state" data-win="false" onClick={this.changeWin.bind(this, team_index)} ></div>
                                }
                              </div>
                            </div>
                            <div className="delete-team" data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} onClick={this.deleteTeam.bind(this, team_index)}>X</div>
                          </div>
                        </div>
                      ))
                    }
                    <div data-round_index={round_index} data-group_index={group_index} onClick={this.addTeam.bind(this, group_index)} className="add-team">新增队</div>
                  </div>
                ))
              }
              <div className="add-group" onClick={this.addGroup.bind(this, round_index)}>新增组</div>
            </div>
          ))
        }
        <div onClick={this.addRound.bind(this)} className="btn new-btn">+添加轮</div>

        <div className="btn add-btn" onClick={this.submit.bind(this)}>提交</div>

      </div>
    )
  }
}

// class Winbtn extends Component {
//   constructor() {
//
//   }
//
//   render() {
//     return (
//       <div data-round_index={round_index} data-group_index={group_index} data-team_index={team_index} data-person_index="1" className="game-state" data-win="false" onClick={this.changeWin.bind(this, team_index)} ></div>
//     )
//   }
// }
