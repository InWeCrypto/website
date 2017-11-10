import React from 'react'
import timeNew from '../../lib/app/img/home_time_new.png'
import { getData } from '../../lib/app/js/app'
import { PORTOCAL } from '../../lib/app/js/env'
import "babel-polyfill"

import './index.less'

export default class HomeHeaderTopTimeNew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info: null,
    }
  }
  componentWillReceiveProps(nextProps) {
    let ele = this.refs.list
    let ele_copy = this.refs.list_copy
    let ele_box = this.refs.box
    if(nextProps.priceData === this.props.priceData) return
    let arr = [];
    nextProps.priceData.data.map(
      async item => {
      let data =  await getData(item.url)
      arr.push(data[0])
      this.setState({
        info: arr,
      })
    })
  }
  componentDidMount() {
    let ele = this.refs.list
    let ele_copy = this.refs.list_copy
    let ele_box = this.refs.box
    this.timer =  setInterval(function() {
        console.log(12)
        if(ele_copy.offsetTop - ele_box.scrollTop <= 0) {
          ele_box.scrollTop = 0
        }else {
          ele_box.scrollTop = this.refs.box.scrollTop + 10 
        }
      }.bind(this),1000)
   }
  componentWillUnmount() {
    this.timer && clearInterval(this.timer)
  }

  render() {
    let { priceData } = this.props
    let { info } = this.state
    let ele = this.refs.list
    let ele_box = this.refs.box
    if(ele && ele.innerHTML) {
      this.refs.list_copy.innerHTML = ele.innerHTML
    }
    return (
      <div className="pc-home-header-top-time-new">
        <div  className="new-pic">
          <img src={timeNew} />
        </div>
        <div ref="box" className="new-content-box" >
        <div ref="list" className="new-content" >
          {
            info && info.map(item => {
                return <div className="new-content-text" key={item.id.toString()} >
                  {item.symbol} 实时价格 ${item.price_usd}
                </div>                
            })
          } 
          </div>         
          <div ref="list_copy" className="new-content-copy"></div>
        </div>
      </div>
    )
  }
}


