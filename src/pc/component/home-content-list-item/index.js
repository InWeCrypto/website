import React from 'react'
import './index.less'
export default class HomeContentListItem extends React.Component {
  render() {
    console.log('This is item page')
    let {width,height,top, left, text} = this.props
    return (
      <div className="pc-home-content-list-item" 
        style={{width: width, height: height, top: top,  left: left}} 
      >
        {text}
      </div>
    )
  }
}






