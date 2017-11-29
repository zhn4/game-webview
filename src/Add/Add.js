import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import GameInfo from '../GameInfo/GameInfo'


import './add.css'

export default class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // game: false
      titleThree: '',
      titleOne: '',
      titleTwo: '',
      time: '',
      max: '',
      money: '',
      contact: '',
      phone: '',
      ps: '',
      first: '',
      second: '',
      third: '',
      fourth: '',
      people: []
    }
  }
  componentWillMount() {
    if(this.props.match.params.id) {
      console.log('you id')
      this.setState({
        // game: false
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
        people: ['asdf', 'cvbbv', '123123']
      })
    }

  }
  deleteGame() {
    console.log('删除赛事，发送ajax')
  }
  newGame() {
    console.log('发布赛事，发送ajax')
  }
  syncTitleThree(e) {
    this.setState({
      titleThree: e.target.value
    })
  }
  syncTitleOne(e) {
    this.setState({
      titleOne: e.target.value
    })
  }
  syncTitleTwo(e) {
    this.setState({
      titleTwo: e.target.value
    })
  }
  syncTime(e) {
    this.setState({
      time: e.target.value
    })
  }
  syncMax(e) {
    this.setState({
      max: e.target.value
    })
  }
  syncMoney(e) {
    this.setState({
      money: e.target.value
    })
  }
  syncContact(e) {
    this.setState({
      contact: e.target.value
    })
  }
  syncPhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  syncPs(e) {
    this.setState({
      ps: e.target.value
    })
  }
  syncFirst(e) {
    this.setState({
      first: e.target.value
    })
  }
  syncSecond(e) {
    this.setState({
      second: e.target.value
    })
  }
  syncThird(e) {
    this.setState({
      third: e.target.value
    })
  }
  syncFourth(e) {
    this.setState({
      fourth: e.target.value
    })
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
    console.log(this.state)
  }
  render() {
    return (
      <div className="add">
        <div className="title">
          赛事标题
        </div>
        <div className="box">
          <span>引题</span>
          <input type="text" placeholder="请输入引题" onChange={this.syncTitleThree.bind(this)} value={this.state.titleThree}/>
        </div>
        <div className="box">
          <span>主标题</span>
          <input type="text" placeholder="请输入主标题" onChange={this.syncTitleOne.bind(this)} value={this.state.titleOne}/>
        </div>
        <div className="box">
          <span>副标题</span>
          <input type="text" placeholder="请输入副标题" onChange={this.syncTitleTwo.bind(this)} value={this.state.titleTwo}/>
        </div>
        <div className="title">
          赛事时间
        </div>
        <div className="box">
          <span>赛事时间</span>
          <input type="text" placeholder="请输入赛事时间" onChange={this.syncTime.bind(this)} value={this.state.time}/>
        </div>
        <div className="title">
          报名方式
        </div>
        <div className="box">
          <span>人数限制</span>
          <input type="text" placeholder="请输入人数限制" onChange={this.syncMax.bind(this)} value={this.state.max}/>
        </div>
        <div className="box">
          <span>报名费用</span>
          <input type="text" placeholder="请输入报名费用" onChange={this.syncMoney.bind(this)} value={this.state.money}/>
        </div>
        <div className="box">
          <span>联系人</span>
          <input type="text" placeholder="请输入联系人名称" onChange={this.syncContact.bind(this)} value={this.state.contact}/>
        </div>
        <div className="box">
          <span>联系电话</span>
          <input type="text" placeholder="请输入联系电话" onChange={this.syncPhone.bind(this)} value={this.state.phone}/>
        </div>
        <div className="box">
          {/* <span>备注</span> */}
          <textarea placeholder="备注,赛程" onChange={this.syncPs.bind(this)} value={this.state.ps}></textarea>
        </div>
        <div className="title">
          赛事奖励
        </div>
        <div className="box">
          <span>冠军礼品</span>
          <input type="text" placeholder="请输入冠军礼品" onChange={this.syncFirst.bind(this)} value={this.state.first}/>
        </div>
        <div className="box">
          <span>亚军礼品</span>
          <input type="text" placeholder="请输入亚军礼品" onChange={this.syncSecond.bind(this)} value={this.state.second}/>
        </div>
        <div className="box">
          <span>季军礼品</span>
          <input type="text" placeholder="请输入季军礼品" onChange={this.syncThird.bind(this)} value={this.state.third}/>
        </div>
        <div className="box">
          <span>殿军礼品</span>
          <input type="text" placeholder="请输入殿军礼品" onChange={this.syncFourth.bind(this)} value={this.state.fourch}/>
        </div>

        {
          this.props.match.params.id
            ?
              <div>
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
            :
            <div>
              <div className="btn delete-btn" onClick={this.deleteGame.bind(this)}>删除赛事</div>

              <div className="btn add-btn" onClick={this.newGame.bind(this)}>发布赛事</div>
            </div>
        }


      </div>
    )
  }
}
