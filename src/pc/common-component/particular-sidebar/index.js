import React, { Component } from 'react'
import { switchCard } from '../../lib/app/js/app'
import './index.less'

export default class ParticularSideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '视频'
    }
  }
  switchHandler1 = (e) => {
    switchCard('news-title-active',e)
    this.setState({
      text: '视频'
    })
  }
  switchHandler2 = (e) => {
    switchCard('news-title-active',e)
    this.setState({
      text: '图文'
    })
  }
  render() {
    let video = true
    return (
      <div className="pc-particular-sidebar">
        <div className="sidebar-explore">
          <h2 className="sidebar-title">Explorer</h2>
          <div className="explore-content">
            <p>Etherchain.org</p>
            <p>Etherscan.io</p>
          </div>
        </div>
        <div className="sidebar-wallet">
          <h2 className="sidebar-title">Wallet</h2>
          <div className="wallet-content">
            <button className="sidebar-btn" style={{marginRight: '30px'}}>INWE</button>
            <button className="sidebar-btn">IM</button>
          </div>
        </div>
        <div className="sidebar-twitter">
          <h2 className="sidebar-title">Twitter</h2>
          <div className="twitter-content">
            <p>推文由@thereumproject发布</p>
            <button className="sidebar-btn sidebar-btn-more">加载更多</button>
          </div>
        </div>
        <div className="sidebar-more-info">
          <h2 className="sidebar-title">更多资讯</h2>
          <div className="more-info-content">
            <img src='' />
            图片来源后台
          </div>
        </div>
      </div>
    )
  }
}


