import React from 'react'
import HomeHeaderTopPersonDetail from '../home-header-top-person-detail/index'
import HomeHeaderTopTimeNew from '../home-header-top-time-new/index'

import './index.less'

export default class HomeHeaderTop extends React.Component {
  render() {
    return (
      <div className="pc-home-header-top">
          <HomeHeaderTopPersonDetail />
          <HomeHeaderTopTimeNew />
      </div>
    )
  }
}


