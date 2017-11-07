import React from 'react'

import './index.less'

export default class HomeHeaderNavList extends React.Component {
  render() {
    return (
      <ul className="pc-home-header-nav-list">
        <li className="nav-item nav-item-active">Ico评测</li>
        <li className="nav-item">行情</li>
        <li className="nav-item">浏览器</li>
        <li className="nav-item">所有资讯</li>
        <li className="nav-item nav-item-language">
          <p>语言<span className="dropdown-icon"></span></p>
          <div className="nav-item-language-dropdown">
            <span className="dropdown-triangle"></span>
            <span className="item">中文</span>
            <span className="item item-active">英文</span>
            <span className="item">日文</span>
          </div>
        </li>
      </ul>

    )
  }
}


