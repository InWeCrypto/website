import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import HomeHeader from './component/home-header/index'
import HomeContent from './component/home-content/index'
import HomeFooter from './component/home-footer/index'
import HomeCopyRight from './component/home-copy-right/index'

import './index.less'

export default class Home extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
     <div className="home">
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
        <HomeCopyRight /> 
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)

