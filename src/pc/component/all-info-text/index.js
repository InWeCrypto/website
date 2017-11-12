import React from 'react'

import { getData } from '../../lib/app/js/app'
import { PORTOCAL } from '../../lib/app/js/env'

import AllInfoHomePageTextCard from '../all-info-home-page-text-card/index'


import './index.less'

export default class AllInfoText extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      allInfo: [{
        id:1,
        content: '历史的时刻手里的看法开始手里的看法试试看电视了实力肯定疯了似的开发的吗我',
        title: '快讯',
        updated_at: '2017-3-23 09:12:00',
        click_rate: 12,
        comments_count: 22,
        save_user: true
      }],
    }
  } 
  render() {
    let { allInfo } = this.state
    return (
      <div className="pc-all-info-text">
        {
          allInfo && allInfo.map(data => {
              return < AllInfoHomePageTextCard 
                key = {data.id.toString()}
                id = {data.id}
                content = {data.content}
                title = {data.title}
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
    let data =  await getData(`${PORTOCAL}/article/txt`)
     this.setState ({
       allInfo: data
     })
  }
}


