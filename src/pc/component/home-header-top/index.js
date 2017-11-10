import React from 'react'
import HomeHeaderTopPersonDetail from '../home-header-top-person-detail/index'
import HomeHeaderTopTimeNew from '../home-header-top-time-new/index'
import { getData } from '../../lib/app/js/app'
import { PORTOCAL } from '../../lib/app/js/env'
import "babel-polyfill"
import './index.less'

export default class HomeHeaderTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      priceData : ''
    }
  }
  render() {
    return (
      <div className="pc-home-header-top">
          <HomeHeaderTopPersonDetail />
          <HomeHeaderTopTimeNew priceData={this.state.priceData}/>
      </div>
    )
  }
  async componentDidMount() {
    let data = await getData(`${PORTOCAL}/home/ico_time_price`)
    this.setState({
      priceData: data
    })
  }
}


