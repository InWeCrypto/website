import React from 'react'
import $ from 'jquery'
import { getData } from '../../../lib/app/js/app'
import { PORTOCAL } from '../../../lib/app/js/env'
import "babel-polyfill"

import ParticularOnlineHeader from '../particular-online-header/index'

import './index.less'

export default class HomeHeaderTopTimeNew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info: null
    }
  }

  render() {
    return (
      <div className="pc-particular-online-main">
        <ParticularOnlineHeader />
      </div>
    )
  }
}


