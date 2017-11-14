import React, {Component} from 'react'
import ParticularOnlineTable from '../particular-online-table/index'
import './index.less'

export default class ParticularOnlineMarket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      choice: 'ETH',
      num: '12'
    }
  }
  showHandler = () => {
    this.setState({
      show: true
    })
  }
  choiceHandler1 = (e) => {
    this.setState({
      show: false,
      choice: e.target.innerHTML,
      num: '33'
    })
  }
  choiceHandler2 = (e) => {
    this.setState({
      show: false,
      choice: e.target.innerHTML,
      num: '44'
    })
  }
  render() {
    return (
      <div className="pc-particular-online-market">
        <h2 className="market-title">交易市场</h2>
        <div className="market-drop-text" onClick={this.showHandler}>{this.state.choice}<span className="market-drop-icon"></span></div>
          <ul className="market-drop" style={{display:this.state.show?'flex':'none'}}>
            <li onClick={this.choiceHandler1} className="market-drop-item">ETH</li>
            <li onClick={this.choiceHandler2} className="market-drop-item">BTC</li>
          </ul>
          <ParticularOnlineTable num={this.state.num} />
      </div>
    )
  }
}


