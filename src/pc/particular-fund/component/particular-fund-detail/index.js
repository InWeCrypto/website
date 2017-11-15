import React, {Component} from 'react'
import './index.less'

export default class ParticularFundDetail extends Component {
  render() {
    let { num } = this.props
    return (
      <div className="pc-particular-fund-detail">
        <h2>ICO细则</h2>
        <h4>TOKEN SALE: 14 NOV - 14 DEC</h4>
        <div className="list">
          <ul className="list-left">
            <li>Ticker: <span className="list-data">Ticker</span></li>
            <li>Token type: <span className="list-data">Token type</span></li>
            <li>ICO Token Price: <span className="list-data">ICO Token Price</span></li>
            <li>Fundraising Goal: <span className="list-data">Fundraising Goal</span></li>
            <li>Total Tokens: <span className="list-data">Total Tokens</span></li>
            <li>Available for Token Sale: <span className="list-data">Available for Token Sale</span></li>
          </ul>
          <ul className="list-right">
            <li>Whitelist: <span className="list-data">Whitelist</span></li>
            <li>Know Your Customer (KYC): <span className="list-data">Know</span></li>
            <li>Min/Max Personal Cap: <span className="list-data">Min/Max Personal Cap</span></li>
            <li>Token Issue: <span className="list-data">Token Issue</span></li>
            <li>Token Issue: <span className="list-data">oken Issue</span></li>
          </ul>
        </div>
        <a className="offcial-website">官网</a>
      </div>
    )
  }
}


