import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import CommonHeader from '../common-component/common-header/index'
import ParticularOnlineMain from './component/particular-online-main/index'
import ParticularSideBar from '../common-component/particular-sidebar/index'

import './index.less'

export default class ParticularOnline extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
     <div className="pc-particular-online">
        <CommonHeader classInfo = "nav-item-active" />
        <div className="page-wrap">
          <div className="content">
            <ParticularOnlineMain />
            <ParticularSideBar />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ParticularOnline />,
  document.getElementById('root')
)


