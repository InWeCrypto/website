import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import CommonHeader from '../common-component/common-header/index'
import AllInfoHomePage from './component/all-info-home-page/index'

import './index.less'

export default class AllInfo extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
     <div className="pc-all-info">
        <CommonHeader classInfo = "nav-item-active" />
        <AllInfoHomePage />
      </div>
    )
  }
}

ReactDOM.render(
  <AllInfo />,
  document.getElementById('root')
)


