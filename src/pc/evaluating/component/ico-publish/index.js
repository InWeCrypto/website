import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

export default class IcoPublish extends Component {
  render() {
    let info = this.props.ico_assess_issue_info;
    return (
      <div>
        <div className="ico-publish">
          <h2 className="ico-publish-title">ICO发行情况</h2>
          {/* <ul className="ico-publish-table">
            <li className="ico-publish-item">
              <h4>众筹时间</h4>
              <p>{info.create}</p>
            </li>
            <li className="ico-publish-item">
              <h4>总发行量</h4>
              <p>10亿KNC</p>
            </li>
            <li className="ico-publish-item">
              <h4>ICO量</h4>
              <p />
            </li>
            <li className="ico-publish-item">
              <h4>接受币种</h4>
              <p />
            </li>
            <li className="ico-publish-item">
              <h4>众筹金额</h4>
              <p />
            </li>
            <li className="ico-publish-item">
              <h4>价格</h4>
              <p />
            </li>
          </ul> */}
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
                    <tr>
                      {/* <td>{item.name}</td>
                      <td>{item.desc}</td>
                      <td style={{ borderRight: 0 }}>{item.score}</td> */}
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
