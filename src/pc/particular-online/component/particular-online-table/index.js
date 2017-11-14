import React, {Component} from 'react'
import './index.less'

export default class ParticularOnlineTable extends Component {
  render() {
    let { num } = this.props
    return (
      <div className="pc-particular-online-table">
        <table className="table-data">
          <tbody>
          <tr>
            <th></th>
            <th>平台</th>
            <th>交易对</th>
            <th>价格</th>
            <th>24H成交量</th>
            <th>更新时间</th>
          </tr>
          <tr>
            <td><img className="table-data-logo"/></td>
            <td>{num}</td>
            <td>交易对</td>
            <td>价格</td>
            <td>24H成交量</td>
            <td>更新时间</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


