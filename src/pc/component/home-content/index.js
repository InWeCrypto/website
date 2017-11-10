import React from 'react'
import { getData } from '../../lib/app/js/app'
import { PORTOCAL } from '../../lib/app/js/env'

import HomeContentHeader from '../home-content-header/index'
import HomeContentList from '../home-content-list/index'


import './index.less'
export default class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }
  render() {
    return (
      <div className="pc-home-content">
       <HomeContentHeader />
       <HomeContentList project={this.state.project} />
      </div>
    )
  }
  async componentDidMount(){
    let data =  await getData(`${PORTOCAL}/home/project`)
     this.setState ({
       project: data
     })
  }
}


