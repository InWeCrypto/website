import React from 'react'

import { getData } from '../../../lib/app/js/app'
import { PORTOCAL } from '../../../lib/app/js/env'

import AllInfoHomePageTextImgCard from '../all-info-home-page-text-img-card/index'


import './index.less'

export default class AllInfoTextImg extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      allInfo: null,
    }
  } 
  render() {
    let { allInfo } = this.state
    return (
      <div className="pc-all-info-text-img">
        {
          allInfo && allInfo.map(data => {
              return < AllInfoHomePageTextImgCard 
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
    let data =  await getData(`${PORTOCAL}/article/img-txt`)
     this.setState ({
       allInfo: data
     })
  }
}


