import React from 'react'
import HomeHeaderTop from '../home-header-top/index'
import HOmeHeaderNav from '../home-header-nav/index'
export default class CommonHeader extends React.Component {
  render() {
    let {classIco, classPrice, classBrowser, classInfo } = this.props        
    return (
      <div className="pc-common-header">
        <HomeHeaderTop />
        <HOmeHeaderNav
          classIco = {classIco} 
          classPrice = {classPrice} 
          classBrowser = {classBrowser} 
          classInfo = {classInfo}
         />
      </div>
    )
  }
}


