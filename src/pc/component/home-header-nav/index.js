import React from 'react'
import home_logo from '../../lib/app/img/home_logo.png'
import home_logo_text from '../../lib/app/img/home_logo_text.png'
import HomeHeaderNavList from '../home-header-nav-list/index'
import './index.less'

export default class HomeHeaderNav extends React.Component {
  render() {
    return (
      <div className="pc-home-header-nav">
        <div className="pc-home-header-nav-content">
          <div className="home-logo">
            <img className="home-logo-pic" src={home_logo} />
            <img className="home-logo-text" src={home_logo_text} />
          </div>
          <HomeHeaderNavList />
        </div>
      </div>
    )
  }
}


