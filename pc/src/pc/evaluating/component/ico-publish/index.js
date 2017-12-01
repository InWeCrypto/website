import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

export default class IcoPublish extends Component {
  render() {
    let { unit } = this.props;
    let info = this.props.ico_assess_issue_info;
    return (
      <div>
        <div className="ico-publish">
          <h2 className="ico-publish-title">ICO发行情况</h2>
          <table>
            <thead>
              <tr>
                <th>众筹时间</th>
                <th>总发行量</th>
                <th>ICO量</th>
                <th>接受币种</th>
                <th>众筹金额</th>
                <th>价格</th>
                {/* <th style={{ borderRight: 0 }}>评分(10分评测)</th> */}
              </tr>
            </thead>
            <tbody>
              {info &&
                info.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{`${item.crowdfunding_start_at.substring(
                        0,
                        10
                      )}-${item.crowdfunding_end_at.substring(5, 10)}`}</td>
                      <td>{`${item.ico_circulation / 100000000}亿${unit}`}</td>
                      <td>{`${item.ico_amount / 100000000}亿${unit}`}</td>
                      <td>{item.ico_accept}</td>
                      <td>{`${item.ico_crowfunding_amount /
                        10000}万${item.ico_crowfunding_amount_unit}等值`}</td>
                      <td>{item.ico_price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
