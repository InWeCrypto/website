import React from 'react'
import img_col from '../../lib/app/img/icon_Favorites.png'
import img_no_col from '../../lib/app/img/icon_noFavorites.png'
import AllInfoDetail from '../all-info-detail/index'


import './index.less'
export default class AllInfoHomePageTextCard extends React.Component {
  render() {
    let { id, title, content, date, read, reply, collection } = this.props
    localStorage.setItem(id,JSON.stringify(this.props))
    return (
      <div>
      <div className="pc-all-info-home-page-text-card" onClick={this.clickHandler}>
      <a href={`../../all-info-detail-page/index.html?${id}`}>
        <div className="content">
          <h2>快讯 : {title}</h2>
          <AllInfoDetail 
            className="detail"
            img_col = {img_col}
            img_no_col ={img_no_col}
            date = {date} 
            read = {read} 
            reply = {reply} 
            collection = {collection}
          />
        </div>
        </a>
      </div>
    </div>
    )
  }
}


