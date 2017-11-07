import React from 'react'
import HomeHeaderTop from '../home-header-top/index'
import HOmeHeaderNav from '../home-header-nav/index'
import HomeHeaderLoginSearch from '../home-header-login-search/index'
import HomeHeaderSlideShow from '../home-header-slideshow/index'
import HomeHeaderDynamicNews from '../home-header-dynamic-news/index'
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className="pc-home-header">
        <HomeHeaderTop />
        <HOmeHeaderNav />
        <HomeHeaderLoginSearch />
        <HomeHeaderSlideShow />
        <HomeHeaderDynamicNews />
      </div>
    )
  }
}


