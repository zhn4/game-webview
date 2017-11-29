import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './dashboard.css'

let game = [
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
  },
  {
    id: 3,
    title: '兴盛路冬季飞镖比赛2',
    address: '广州市天河区珠江新城兴盛路HappyMonk酒吧',
    time: '11月22日  19：00'
  },
  {
    id: 4,
    title: '兴盛路冬季飞镖比赛2',
    address: '广州市天河区珠江新城兴盛路HappyMonk酒吧',
    time: '11月22日  19：00'
  },
  {
    id: 5,
    title: '兴盛路冬季飞镖比赛2',
    address: '广州市天河区珠江新城兴盛路HappyMonk酒吧',
    time: '11月22日  19：00'
  }
]

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: []
    }
  }
  componentWillMount() {
    console.log('发送ajax')
    this.setState({
      game: game
    })
  }
  render() {
    return (
      <div className="dashboard">
        {
          this.state.game.map((game, i) => (
            game
              ?
                <div className="card" key={i}>
                  <div className="logo">logo</div>
                  <div>
                    <Link to={'/edit/' + game.id}>
                      <div className="title">{game.title}</div>
                      <div className="address">{game.address}</div>
                      <div className="time">{game.time}</div>
                    </Link>
                  </div>
                  <div>></div>
                </div>
              :
              ''
          ))
        }
        {
          this.state.game.length < 1
            ?
              <div className="no-game">暂无赛事</div>
            :
            ''

        }
        <Link to="/add" className="link-btn">发布赛事</Link>
      </div>
    )
  }
}
