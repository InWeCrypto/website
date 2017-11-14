import React from 'react'
import { switchCard } from '../../lib/app/js/app'
import './index.less'

export default class ParticularNews extends React.Component {
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
      <div className="pc-particular-news">
        <h2 className="particular-news-title">INWE报道</h2>
       <ul className="news-list">
        <li onClick={this.switchHandler1} className="news-title news-title-active">视频</li>
        <li onClick={this.switchHandler2} className="news-title">图文</li>
       </ul>
       <ul className="news-card-wrap">
       <li className="news-card">
          <div className="new-pic">
            { video ? 
              <video src='' controls="controls"></video>
              :
              <img  src=''/>
             }
          </div>
          <div className="news-content">
            <h2>Kyber Network ICO Review Kyber Network ICO Review ...</h2>
            <p>{this.state.text}</p>
            <p>time</p>
          </div>
          <a href="../../all-info-detail-page" className="link"></a>
        </li>
        
      </ul>
      </div>
    )
  }
}


