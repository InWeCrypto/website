import React from 'react'

import { getData } from '../../lib/app/js/app'
import { PORTOCAL } from '../../lib/app/js/env'

import AllInfoHomePageVideoCard from '../all-info-home-page-video-card/index'


import './index.less'

export default class AllInfoVideo extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      allInfo: null,
    }
  } 
  render() {
    let { allInfo } = this.state
    return (
      <div className="pc-all-info-text">
        {
          allInfo && allInfo.map(data => {
              return < AllInfoHomePageVideoCard 
                key = {data.id.toString()}
                id = {data.id}
                link = {data.video}
                title = {data.title}
                content = {data.content}
                date = {data.updated_at} 
                read = {data.click_rate}
                reply = {data.comments_count}
                collection = {data.save_user}
              />
            })
        }
    </div>)
  }
  async componentDidMount(){
    let data =  await getData(`${PORTOCAL}/article/video`)
     this.setState ({
       allInfo: data
     })
  }
}


