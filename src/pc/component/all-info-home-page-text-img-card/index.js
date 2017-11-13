import React from 'react'
import img_col from '../../lib/app/img/icon_Favorites.png'
import img_no_col from '../../lib/app/img/icon_noFavorites.png'
import AllInfoDetail from '../all-info-detail/index'


import './index.less'
export default class AllInfoHomePageTextImgCard extends React.Component {
  render() {
    let {id, link, title, content, date, read, reply, collection } = this.props
    localStorage.setItem(id,JSON.stringify(this.props))
    return (
      <div className="pc-all-info-home-page-text-img-card">
        <a href={`../../all-info-detail-page/index.html?${id}`}>
        <img className="pic" src={link} />
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
          <AllInfoDetail
            className = 'add-detail'
            img_col = {img_col} 
            img_no_col = {img_no_col}
            date = {date} 
            read = {read} 
            reply= {reply} 
            collection = {collection}
          />
        </div>
        </a>
      </div>
    )
  }
}


