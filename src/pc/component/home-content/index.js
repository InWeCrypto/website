import React from 'react'
import { getDate } from '../../lib/app/js/app'
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
    console.log(this.state.project)
    return (
      <div className="pc-home-content">
       <HomeContentHeader />
       <HomeContentList />
      </div>
    )
  }
  async componentDidMount(){
    let data =  await getDate(`${PORTOCAL}/home/project`)
     this.setState ({
       project: data
     })
  }
}


