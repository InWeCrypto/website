import React, {Component} from 'react'
import './index.less'

export default class ParticularOnlineCurrentPrice extends Component {
  render() {
    let { num } = this.props
    return (
      <ul className="pc-particular-online-current-price">
          <li className="current-price-item">
            <p>当前价格</p>
            <p>{num}</p>
          </li>
          <li className="current-price-item">
            <p>Volume</p>
            <p>72195.66</p>
          </li>
          <li className="current-price-item">
            <p>24H-Change</p>
            <p style={{ color: 'rgba(34,172,57,1)' }}>-0.82%</p>
          </li>
          <li className="current-price-item">
            <p>24H最高值</p>
            <p style={{ color: 'rgba(255,50,50,1)' }}>0.94818362</p>
          </li>
          <li className="current-price-item">
            <p>24H最低值</p>
            <p style={{ color: 'rgba(34,172,57,1)' }}>0.94818362</p>
          </li>
        </ul>
    )
  }
}


