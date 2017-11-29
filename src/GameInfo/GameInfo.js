import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


import './GameInfo.css'

export default class GameInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // game: false
      people: ['123', '123123']
    }
  }
  componentWillMount() {
    // console.log(this.props.match.params.id)
  }
  addPeople() {
    // console.log('添加')
    let people_list = this.state.people
    people_list.push('')
    this.setState({
      people: people_list
    })
  }
  deletePeople() {
    let people_list = this.state.people
    people_list.pop()
    this.setState({
      people: people_list
    })
  }
  changeName(i, e) {
    // console.log(e.target.value)
    let people_list = this.state.people
    people_list[i] = e.target.value
    this.setState({
      people: people_list
    })
  }
  finish() {
    // console.log('提交参赛人员')
    console.log(this.state.people)
    // 留一个ajax交互
    console.log('提交ajax')
  }
  render() {
    return (
      <div className="game-info add">
        {/* <h1>ajax获取比赛信息</h1> */}
        <p>添加参赛人员</p>
        {
          this.state.people.map((people, i) => (
            <div key={i} className="box">
              <span>{i}号</span>
              <input onChange={this.changeName.bind(this, i)} defaultValue={people} placeholder="添加名字"/>
            </div>
          ))
        }
        <div onClick={this.addPeople.bind(this)} className="btn new-btn">+添加</div>
        <div onClick={this.deletePeople.bind(this)} className="btn delete-btn">-删除</div>
        <div onClick={this.finish.bind(this)} className="btn add-btn">提交</div>
      </div>
    )
  }
}
