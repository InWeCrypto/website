import React from 'react'
import HomeHeaderTop from '../home-header-top/index'
import HOmeHeaderNav from '../home-header-nav/index'
import HomeHeaderSlideShow from '../home-header-slideshow/index'
import { getData } from '../../lib/app/js/app'
import { PORTOCAL } from '../../lib/app/js/env'
export default class HomeHeader extends React.Component {
  // static defaultProps = {
  //   getImgs: 
  // }
  constructor(props) {
    super(props);
    this.state = {
      imgData: null
    };
  }
  render() {
    return (
      <div className="pc-home-header">
        <HomeHeaderTop />
        <HOmeHeaderNav />
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


