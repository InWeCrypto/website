import React, { Component } from "react";
import "./index.less";

export default class ParticularOnlineTable extends Component {
  render() {
    let cont = this.props.list;
    let keys = [];
    if (cont) {
      keys = Object.keys(cont);
    }
    return (
      <div className="pc-particular-online-table">
        <table className="table-data">
          <tbody>
            <tr>
              {/* <th></th> */}
              <th>平台</th>
              <th>交易对</th>
              <th>价格</th>
              <th>24H成交量</th>
              <th>更新时间</th>
            </tr>
            {(!keys || keys.length == 0) && (
              <tr>
                <td colSpan="7">暂无数据</td>
              </tr>
            )}
            {cont &&
              keys.map((item, index) => {
                return (
                  <tr key={index}>
                    {/* <td>
                      <img className="table-data-logo" />
                    </td> */}
                    <td>{cont[item].source}</td>
                    <td>{cont[item].pair}</td>
                    <td>{cont[item].pairce}</td>
                    <td>{cont[item].volum_24}</td>
                    <td>{cont[item].update}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
