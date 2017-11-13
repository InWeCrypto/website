import React from 'react'
import ReactDOM from 'react-dom'

import CommonHeader from '../common-component/common-header/index'
// import AllInfoHomePage from '../component/all-info-home-page/index'
// import AllInfoDetail from '../component/all-info-detail/index'

// import img_col from '../lib/app/img/all-info-detail-page_icon_like.png'
// import img_no_col from '../lib/app/img/all-info-detail-page_icon_unlike.png'

import './index.less'

export default class PriceMarket extends React.Component {
  render() {
    // let search = decodeURIComponent(window.location.search)
    // let data = JSON.parse(search.split('?')[1])
    return (
     <div className="pc-price-market">
        <CommonHeader classPrice = "nav-item-active" />
        <div className="page-wrap">
        {/* <div className="content">
          <h2>{data.title}</h2>
          <AllInfoDetail
            img_col = {img_col}
            img_no_col = {img_no_col}
            className="reply-detail"
            date = '2017-12-12 09:12:34'
            read = '12' 
            reply = '34' 
           />
          <p>{data.text}</p>
        </div>  */}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <PriceMarket />,
  document.getElementById('root')
)


