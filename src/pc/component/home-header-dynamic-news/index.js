import React from 'react'
import HomeHeaderDynamicNewsContent from '../home-header-dynamic-news-content/index'
import './index.less'
export default class HomeHeaderDynamicNews extends React.Component {
  render() {
    return (
      <div className="pc-home-header-dynamic-news">
        <div className="news-content">
          <h2 className="new-title">NEW</h2>
          <HomeHeaderDynamicNewsContent />
        </div>
      </div>
    )
  }
}


