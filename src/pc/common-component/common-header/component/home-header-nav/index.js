import React from 'react'
import home_logo from '../../../../lib/app/img/home_logo.png'
import home_logo_text from '../../../../lib/app/img/home_logo_text.png'
import HomeHeaderNavList from '../home-header-nav-list/index'
import HomeHeaderLoginSearch from '../home-header-login-search/index'

import './index.less'

export default class HomeHeaderNav extends React.Component {
  
  render() {
    let {classIco, classPrice, classBrowser, classInfo } = this.props    
    return (
      <div className="pc-home-header-nav">
        <div className="pc-home-header-nav-content">
          <div className="home-logo">
            <a className="home-logo-pic" href="../../../index.html">
              <img src={home_logo} />
            </a>
          </div>
          <HomeHeaderNavList 
            classIco = {classIco} 
            classPrice = {classPrice} 
            classBrowser = {classBrowser} 
            classInfo = {classInfo}
          />
          <HomeHeaderLoginSearch />
        </div>
      </div>
    )
  }
}


