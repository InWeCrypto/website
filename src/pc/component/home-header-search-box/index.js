import React from 'react'
import home_search from '../../lib/app/img/home_search.png'
import './index.less'

export default class HomeHeaderSearchBox extends React.Component {
  render() {
    return (
      <div className="pc-home-header-search-box">
        <button className="search-icon"><img src={home_search} /></button>
        <input className="search-text" type="text" placeholder="搜索项目"/>
      </div>
    )
  }
}


