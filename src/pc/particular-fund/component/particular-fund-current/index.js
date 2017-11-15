import React, {Component} from 'react'
import './index.less'
let start = "2017-11-15 13:02:41"
let end = "2017-11-18 13:02:42"
export default class ParticularFundCurrent extends Component {
  constructor(props){
    super(props)
    this.state = {
      restMs : 0,
    }
  }

  addZero = (date) => {
    if(date<10){
      return `0${date}`
    }
    return `${date}`
  }
  restTimeSeconds = (start, end) => {
    let startReplace = start.replace('-', '/') //兼容safari
    let endReplace = end.replace('-', '/')
    let restMiSeconds = new Date(endReplace).getTime() - new Date(startReplace).getTime();
    return restMiSeconds
  }
  timeManage = (restMiSeconds) => {
    let time = {}
    let date = this.addZero(new Date(restMiSeconds).getDate());
    let hour = this.addZero(new Date(restMiSeconds).getHours());
    let minute = this.addZero(new Date(restMiSeconds).getMinutes());
    let second = this.addZero(new Date(restMiSeconds).getSeconds());
    time.date = date;
    time.hour = hour;
    time.minute = minute;
    time.second = second;
    return time
  }
  componentDidMount() {
    this.setState({
      restMs: this.restTimeSeconds(start, end)
    })
    // 定时器
    let that = this
    this.timer = setInterval(
     () => {
        let preRest = that.state.restMs
        that.setState({
          restMs: preRest - 1000
        })
      },1000)
  }
  componentWillUnMount() {
    this.timer && clearInterval(this.timer)
  }


  render() {
    let { restMs }  = this.state   
    let time
    if(restMs){
       time = this.timeManage(restMs)
      console.log(time)
    }
    let { num } = this.props
    return (
      <div className="pc-particular-fund-current">
        <ul className="particular-fund-current-list">
            <li className="current-item">
              <p>ICO规模</p>
              <p>8.7亿KNC</p>
            </li>
            <li className="current-item">
              <p>总量</p>
              <p>72195.66</p>
            </li>
            <li className="current-item">
              <p>接受币种</p>
              <p>BTC/ETH</p>
            </li>
            <li className="current-item">
              <p>开始时间</p>
              <p>2017.10.30 09:30:00</p>
            </li>
            <li className="current-item">
              <p>开始时间</p>
              <p>2017.12.30 09:30:00</p>
            </li>
            <li className="current-item">
              <p>众筹期数</p>
              <p>无</p>
            </li>
        </ul>
        <h2>离项目结束</h2>
        <div className="rest-time">
          <div className="time-item">
            <span className="rest-time-left">{time && time.date.substring(0,1)}</span><span>{time && time.date.substring(1,2)}</span>
            <span className="rest-time-word">天</span>
          </div>
          <div className="time-item">
            <span className="rest-time-left">{time && time.hour.substring(0,1)}</span><span>{time && time.hour.substring(1,2)}</span>
            <span className="rest-time-word">时</span>
          </div>
          <div className="time-item">
            <span className="rest-time-left">{time && time.minute.substring(0,1)}</span><span>{time && time.minute.substring(1,2)}</span>
            <span className="rest-time-word">分</span>
          </div>
          <div className="time-item" style={{margin:0}}>
            <span className="rest-time-left">{time && time.second.substring(0,1)}</span><span>{time && time.second.substring(1,2)}</span>
            <span className="rest-time-word">秒</span>
          </div>
        </div>
        <div className="progress">
          <div className="progress-line">
            <div className="progress-completed">
              <span className="progress-percent">30%</span>
              <span className="progress-triangle"></span>
            </div>
          </div>
          <div className="progress-current">已募集: {}</div>
          <div className="progress-target">目标: {}</div>
        </div>
      </div>
    )
  }
}


