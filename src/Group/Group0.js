import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


import './Group.css'

export default class Group extends Component {
  constructor(props) {
    super(props)
    this.state = {
      round: [],
      people_list: ['陈', '李', '郭', '周', '司徒', '黄']
    }
  }
  addRound() {
    console.log('增加round')
    let new_round = this.state.round
    let new_group = new Array()
    new_round.push(new_group)
    this.setState({
      round: new_round
    })
  }
  newGroup(i) {
    console.log('增加组')
    let one = {
      name: 'one',
      win: false
    }
    let two = {
      name: 'two',
      win: false
    }
    let new_vs = new Array()// 2个对手的数组
    new_vs.push(one)
    new_vs.push(two)
    // console.log(new_vs)
    let newest_group = this.state.round[i]// 轮内的组
    newest_group.push(new_vs)// 组内添加2个对手
    // console.log(newest_group)
    let new_round = this.state.round
    // let new_group = new Array()
    // new_round.push(new_group)
    this.setState({
      round: new_round
    })
    // new_vs.push(new Object())
    // let new_round = this.state.round[i].push(new_vs)
    // console.log(new_round)
    // this.setState({
    //   round: new_round
    // })
  }
  changeSelect(i, e) {
    console.log(e.target.value)
    let round_index = e.target.dataset.round_index
    let group_index = e.target.dataset.group_index
    let vs_index = e.target.dataset.vs_index
    // console.log(round_index)
    // console.log(group_index)
    // console.log(vs_index)
    // console.log(this.state.round)
    // let round =
    // console.log(this.state.round)
    let round = this.state.round
    // console.log(round[round_index][group_index][vs_index].name)
    round[round_index][group_index][vs_index].name = e.target.value
    // console.log(round)
    // let new_round = round[round_index].group_index.name = e.target.value
    this.setState({
      round: round
    })
  }
  render() {
    return (
      <div className="group">
        <h1>分组</h1>
        {
          this.state.round.map((round, i) => (
            <div key={i} className="">
              <h2>{i + 1}轮</h2>
              {/* {
                round.map((group, i) => (
                  <div key={i}>
                <div>{group[0].name}</div>
                <div>vs</div>
                <div>{group[1].name}</div>
                  </div>
                ))
              } */}
              {
                round.map((group, index) => (
                  <div key={index}>
                    <div>
                      <select data-round_index={i} data-group_index={index} data-vs_index="0" onChange={this.changeSelect.bind(this, i)}>
                        {
                          this.state.people_list.map((name, i) => (
                            <option key={i} value={name}>{name}</option>
                          ))
                        }
                      </select>
                      <input type="checkbox"/>
                    </div>
                    <div>vs</div>
                    <div>
                      <select data-round_index={i} data-group_index={index} data-vs_index="1" onChange={this.changeSelect.bind(this, i)}>
                        {
                          this.state.people_list.map((name, i) => (
                            <option key={i} value={name}>{name}</option>
                          ))
                        }
                      </select>
                      <input type="checkbox"/>
                    </div>
                  </div>
                ))
              }
              <div onClick={this.newGroup.bind(this, i)}>new group</div>
            </div>
          ))
        }
        <div onClick={this.addRound.bind(this)} className="btn new-btn">+添加</div>

      </div>
    )
  }
}
