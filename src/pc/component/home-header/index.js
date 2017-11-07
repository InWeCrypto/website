import React from 'react'
import HomeHeaderTop from '../home-header-top/index'
import HOmeHeaderNav from '../home-header-nav/index'
import HomeHeaderLoginSearch from '../home-header-login-search/index'
import HomeHeaderSlideShow from '../home-header-slideshow/index'
import HomeHeaderDynamicNews from '../home-header-dynamic-news/index'
import { getDate } from '../../lib/app/js/app'
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
    async function getImg() {
      let imgs =  await getDate(`${PORTOCAL}/ad`)
      this.setState({
        imgData: imgs
     })
    }
    return (
      <div className="pc-home-header">
        <HomeHeaderTop />
        <HOmeHeaderNav />
        <HomeHeaderLoginSearch />
        <HomeHeaderSlideShow imgData = {this.state.imgData}/>
        <HomeHeaderDynamicNews />
      </div>
    )
    
  }
  async componentDidMount(){
      let imgs =  await getDate(`${PORTOCAL}/ad`)
       this.setState ({
         imgData: imgs
       })
       
  }
}


