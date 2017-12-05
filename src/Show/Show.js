import React, { Component } from 'react';
import axios from 'axios';

import './Show.css'

let show = {
  id: 1,
  sordId: 10086,
  titleThree: '激烈的',
  titleOne: '兴盛路冬季飞镖比赛2',
  titleTwo: '飞镖比赛',
  time: '2017.12.5',
  max: '20',
  money: '20',
  contact: '李老板',
  phone: '110',
  ps: '注意准时,记得准时报到',
  first: '100元',
  second: '80元',
  third: '50元',
  fourth: '啤酒',
  people: ['asdf', 'cvbbv', '123123']
}

export default class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: {}
    }
  }
  componentWillMount() {
    console.log('发送ajax')
    // this.setState({
    //   show: show
    // })
    let that = this
    axios.get('https://www.dartsunion.com:7474/dartsworld/match/edit?id=' + this.props.match.params.id)
      .then(function (response) {
        console.log(response)
        that.setState({
          show: response.data
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="show">
        <div className="show-part">
          <div className="title-box">
            <div>{this.state.show.titleThree}</div>
            <div>{this.state.show.titleOne}</div>
            <div>{this.state.show.titleTwo}</div>
          </div>
        </div>
        <div className="show-part">
          <div className="box">
            <span>赛事时间</span>
            <span>{this.state.show.time}</span>
          </div>
          <div className="box">
            <span>人数限制</span>
            <span>{this.state.show.max}</span>
          </div>
          <div className="box">
            <span>报名费用</span>
            <span>{this.state.show.money}</span>
          </div>
          <div className="box">
            <span>联系人</span>
            <span>{this.state.show.contact}</span>
          </div>
          <div className="box">
            <span>联系电话</span>
            <span>{this.state.show.phone}</span>
          </div>
          <div className="ps-box">
            <div>备注</div>
            <div>{this.state.show.ps}</div>
          </div>
        </div>
        <div className="show-part">
          <div className="box">
            <span>冠军</span>
            <span>{this.state.show.first}</span>
          </div>
          <div className="box">
            <span>亚军</span>
            <span>{this.state.show.second}</span>
          </div>
          <div className="box">
            <span>季军</span>
            <span>{this.state.show.third}</span>
          </div>
          <div className="box">
            <span>殿军</span>
            <span>{this.state.show.fourth}</span>
          </div>
        </div>
      </div>
    )
  }
}
