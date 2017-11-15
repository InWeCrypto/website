import React from 'react'
import ReactDOM from 'react-dom'
import CommonHeader from '../common-component/common-header/index'
import ParticularFundMain from './component/particular-fund-main/index'
import ParticularSideBar from '../common-component/particular-sidebar/index'

import './index.less'

export default class ParticularFund extends React.Component {
  render() {
    return (
     <div className="pc-particular-fund">
        <CommonHeader classInfo = "nav-item-active" />
        <div className="page-wrap">
          <div className="content">
            <ParticularFundMain />
            <ParticularSideBar />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <ParticularFund />,
  document.getElementById('root')
)


