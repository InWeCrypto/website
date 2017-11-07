import React from 'react'

import './index.less'
export default class HomeContentHeader extends React.Component {
  render() {
    return (
      <div className="pc-home-content-header">
        <h2>项目</h2>
        <div className="split">
          <div className="split-line">
            <span className="split-line-show"></span>
            <span className="split-line-grey"></span>
          </div>
          <div className="change">
            <span className="change-prev"></span>
            <span className="change-next"></span>
          </div>
        </div>
      </div>
    )
  }
}


