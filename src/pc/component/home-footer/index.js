import React from 'react'
import HomeFooterAbout from '../home-footer-about/index'
import HomeFooterRecent from '../home-footer-recent/index'
import HomeFooterFlickr from '../home-footer-flickr/index'

import './index.less'
export default class HomeFooter extends React.Component {
  render() {
    return (
      <div className="pc-home-footer">
        <div className="pc-home-footer-content">
          <HomeFooterAbout />
          <HomeFooterRecent />
          <HomeFooterFlickr />
        </div>
      </div>
    )
  }
}


