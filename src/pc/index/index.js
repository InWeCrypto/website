import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import HomeHeader from '../component/home-header/index'
import HomeContent from '../component/home-content/index'
import './index.less'

export default class Home extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
     <div className="home">
        <HomeHeader />
        <HomeContent />
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)

