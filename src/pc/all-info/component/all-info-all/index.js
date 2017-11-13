import React from 'react'

import {Router, Link, Route, hashHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import { getData } from '../../../lib/app/js/app'
import { PORTOCAL } from '../../../lib/app/js/env'

import AllInfoHomePageTextCard from '../all-info-home-page-text-card/index'
import AllInfoHomePageTextImgCard from '../all-info-home-page-text-img-card/index'
import AllInfoHomePageVideoCard from '../all-info-home-page-video-card/index'
import AllInfoText from '../all-info-text/index'
import AllInfoTextImg from '../all-info-text-img/index'
import AllInfoVideo from '../all-info-video/index'


import './index.less'

export default class AllInfoAll extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      allInfo: null
    }
  }

  render() {
    let { allInfo } = this.state
    return (
      <div className="pc-all-info-all">
        <div className="content">
        {
          allInfo && allInfo.map(data => {
            if(data.type === 1) {
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
            }else if(data.type === 2) {
              return <AllInfoHomePageTextImgCard 
                key = {data.id.toString()}
                id = {data.id}
                link = {data.img}
                title = {data.title}
                content = {data.content}
                date = {data.updated_at} 
                read = {data.click_rate}
                reply = {data.comments_count}
                collection = {data.save_user}
              />
            }else{
              return <AllInfoHomePageVideoCard
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
            }

          })
        }
        
        </div>
      </div>
    )
  }
  async componentDidMount(){
    let data =  await getData(`${PORTOCAL}/article/all`)
     this.setState ({
       allInfo: data
     })
  }
}


