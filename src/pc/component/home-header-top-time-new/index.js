import React from 'react'
import timeNew from '../../lib/app/img/home_time_new.png'

import './index.less'

export default class HomeHeaderTopTimeNew extends React.Component {
  render() {
    return (
      <div className="pc-home-header-top-time-new">
        <img className="new-pic" src={timeNew} />
        <span>BTC实时价格 $ <span>7123</span></span>
      </div>
    )
  }
}


