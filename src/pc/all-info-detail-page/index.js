import React from 'react'
import ReactDOM from 'react-dom'

import CommonHeader from '../common-component/common-header/index'
import AllInfoDetail from '../common-component/all-info-detail/index'

import img_col from '../lib/app/img/all-info-detail-page_icon_like.png'
import img_no_col from '../lib/app/img/all-info-detail-page_icon_unlike.png'

import './index.less'

export default class AllInfoDetailPage extends React.Component {
  render() {
    let search = window.location.search
    let id = search.split('?')[1]
    let item = localStorage.getItem(id)
    let data = JSON.parse(item)
    return (
     <div className="pc-all-info-detail-page">
        <CommonHeader classInfo = "nav-item-active" />
        <div className="page-wrap">
          <div className="content">
            <h2>{data.title}</h2>
            <AllInfoDetail
              img_col = {img_col}
              img_no_col = {img_no_col}
              className="reply-detail"
              date = {data.date}
              read = {data.read} 
              reply = {data.reply} 
            />
            <p>{data.content}</p>
            <div className="chat"><a></a></div>
          </div> 
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <AllInfoDetailPage />,
  document.getElementById('root')
)


