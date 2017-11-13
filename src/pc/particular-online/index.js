import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import CommonHeader from '../component/common-header/index'
import AllInfoHomePage from '../component/all-info-home-page/index'
import ParticularOnlineMain from '../component/particular-online-main/index'

import './index.less'

export default class ParticularOnline extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
     <div className="pc-particular-online">
        <CommonHeader classInfo = "nav-item-active" />
        <div className="page-wrap">
          <ParticularOnlineMain />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ParticularOnline />,
  document.getElementById('root')
)


