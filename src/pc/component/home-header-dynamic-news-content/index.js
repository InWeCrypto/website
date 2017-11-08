import React from 'react'
import news_arrow_left from '../../lib/app/img/home_news_arrow_left.png'
import news_arrow_right from '../../lib/app/img/home_news_arrow_right.png'
import news_arrow_down from '../../lib/app/img/home_news_arrow_down.png'
import news_arrow_more from '../../lib/app/img/home_news_arrow_more.png'
import './index.less'
export default class HomeHeaderDynamicNewsContent extends React.Component {
  render() {
    return (
      <div className="pc-home-header-dynamic-news-content">
        <div className="news-arrow-down"><img src={news_arrow_down} /> </div>  
        <div className="new-main">     
          <div className="news-arrow-left"><img src={news_arrow_left} /></div>
          <div className="new-main-text">
            <h3>英国公司在名字里加入区块链后股价上涨 400%</h3>
            <p>英国公司在名字里加入区块链后股价上涨 400%,英国公司在名字里加入区块链后股价上涨 400%...</p>
          </div>
          <div className="news-arrow-right"><img src={news_arrow_right} /></div>
        </div>
        <div className="news-arrow-more"><img src={news_arrow_more} /></div>
      </div>
    )
  }
}


