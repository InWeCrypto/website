import React from 'react'
import CommonHeader from '../common-header/index'
import HomeHeaderSlideShow from '../home-header-slideshow/index'
import { getData } from '../../lib/app/js/app'
import { PORTOCAL } from '../../lib/app/js/env'
export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: null
    };
  }
  render() {
    return (
      <div className="pc-home-header">
        <CommonHeader classIco = "nav-item-active"/>
        <HomeHeaderSlideShow imgData = {this.state.imgData}/>
      </div>
    )
  }
  async componentDidMount(){
    let imgs =  await getData(`${PORTOCAL}/home/ad`)
      this.setState ({
        imgData: imgs
      })
  }
}


