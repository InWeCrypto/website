import React from 'react'
import $ from 'jquery'
import { getData } from '../../../lib/app/js/app'
import { PORTOCAL } from '../../../lib/app/js/env'
import "babel-polyfill"

import ParticularTitle from '../../../common-component/particular-title/index'
import ParticularFundContent from '../particular-fund-content/index'
import ParticularProjectIntroduce from '../../../common-component/particular-project-introduce/index'
import ParticularNews from '../../../common-component/particular-news/index'

import './index.less'

export default class ParticularFundMain extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info: {
        intro: '项目介绍页',
        point: '针对痛点',
        team: '团队介绍页面',
        example: '应用案例页面'
      }
    }
  }
  async componentDidMount(nextProps){
    let data =  await getData(`${PORTOCAL}/project/6`)
     this.setState ({
      info: data
     })
  }

  render() {
    return (
      <div className="pc-particular-online-main">
        <ParticularTitle title='众筹中' score='7.9' />
        <ParticularFundContent allInfo={this.state.allInfo} />
        <ParticularProjectIntroduce data = {this.state.info} />
        <ParticularNews />
      </div>
    )
  }
}


