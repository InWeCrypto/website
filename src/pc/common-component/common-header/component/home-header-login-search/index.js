import React from 'react'
import HomeHeaderLogin from '../home-header-login/index'
import HomeHeaderSearchBox from '../home-header-search-box/index'

import './index.less'

export default class HomeHeaderLoginSearch extends React.Component {
  render() {
    return (
      <div className="pc-home-header-login-search">
        <HomeHeaderSearchBox />
        <HomeHeaderLogin />
      </div>
    )
  }
}


