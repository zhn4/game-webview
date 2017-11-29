import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import Dashboard from './Dashboard/Dashboard';
import Add from './Add/Add';
import GameInfo from './GameInfo/GameInfo';
import Group from './Group/Group';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App}/>
      {/* 后台首页，获取所有活动 */}
      <Route exact path='/dashboard' component={Dashboard}/>
      {/* 添加赛事 */}
      <Route exact path='/add' component={Add}/>
      {/* 修改赛事，添加参赛人员 */}
      <Route exact path='/edit/:id' component={Add}/>
      <Route exact path='/gameinfo/:id' component={GameInfo}/>
      {/* 比赛分组 */}
      <Route exact path='/group/:id' component={Group}/>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
