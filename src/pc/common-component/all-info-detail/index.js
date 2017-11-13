import React from 'react'
import { cls } from '../../lib/app/js/app'



import './index.less'

export default class AllInfoDetail extends React.Component {
  render() {
    let { date, read, reply, collection, className, img_col, img_no_col } = this.props
    return (
      <div className="pc-all-info-detail">
          <ul className={cls("detail", className)}>
            <li className="date">{date ? date : ''}</li>
            <li className="split-line"></li>
            <li className="read">阅读 : <span>{read}</span></li>
            <li className="split-line"></li>
            <li className="reply">回复 : <span>{reply}</span></li>
            <li className="split-line"></li>
            <li>收藏<img className="collection" src={collection ? img_col : img_no_col}/></li>
        </ul>
      </div>
    )
  }

}


