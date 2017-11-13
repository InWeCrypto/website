import React from 'react'
import './index.less'
import home_top_twitter from '../../../../lib/app/img/home_top_twitter.png'
import home_top_ins from '../../../../lib/app/img/home_top_ins.png'
import home_top_mail from '../../../../lib/app/img/home_top_mail.png'
import home_top_share from '../../../../lib/app/img/home_top_share.png'


export default class HomeHeaderTopPersonDetail extends React.Component {
  render() {
    return (
      <div className="pc-home-header-top-person-detail">
        <a href="#" className="detail-icon"><img src={home_top_twitter}/></a>
        <span className="split-line"></span>
        <a href="#" className="detail-icon"><img src={home_top_ins}/></a>
        <span className="split-line"></span>
        <a href="#" className="detail-icon"><img src={home_top_mail}/></a>
        <span className="split-line"></span>
        <a href="#" className="detail-icon"><img src={home_top_share}/></a>
      </div>
    )
  }
}


