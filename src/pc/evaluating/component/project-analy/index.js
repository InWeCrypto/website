import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

export default class ProjectAnaly extends Component {
  render() {
    let { intro } = this.props;
    return (
      <div className="project-analy">
        <h2 className="project-analy-title">项目分数分析</h2>
        <table>
          <thead>
            <tr>
              <th>类型</th>
              <th>评测观点</th>
              <th style={{ borderRight: 0 }}>评分(10分评测)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>商业模式/市场前景</td>
              <td />
              <td style={{ borderRight: 0 }} />
            </tr>
            <tr>
              <td>团队</td>
              <td />
              <td style={{ borderRight: 0 }} />
            </tr>
            <tr>
              <td>产品价值(创新点)</td>
              <td />
              <td style={{ borderRight: 0 }} />
            </tr>
            <tr>
              <td>融资与估值</td>
              <td />
              <td style={{ borderRight: 0 }} />
            </tr>
            <tr>
              <td>总分</td>
              <td />
              <td style={{ borderRight: 0 }} />
            </tr>
          </tbody>
        </table>
        <p className="analy-remind">注：分数由项目白皮书以及整体规划评估而得出，只做投资参考。</p>
      </div>
    );
  }
}
