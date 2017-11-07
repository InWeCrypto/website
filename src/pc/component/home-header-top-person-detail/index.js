import React from 'react'
import './index.less'
import home_search from '../../lib/app/img/home_search.png'


export default class HomeHeaderTopPersonDetail extends React.Component {
  render() {
    return (
      <div className="pc-home-header-top-person-detail">
        <a href="#" className="detail-icon"><img src={home_search}/></a>
        <span className="split-line"></span>
        <a href="#" className="detail-icon"><img src={home_search}/></a>
        <span className="split-line"></span>
        <a href="#" className="detail-icon"><img src={home_search}/></a>
        <span className="split-line"></span>
        <a href="#" className="detail-icon"><img src={home_search}/></a>
      </div>
    )
  }
}


