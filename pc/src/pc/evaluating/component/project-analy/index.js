import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

export default class ProjectAnaly extends Component {
  render() {
    let { ico_assess_project_analyse, white_paper_url } = this.props;
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
            {ico_assess_project_analyse &&
              ico_assess_project_analyse.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    <td style={{ borderRight: 0 }}>{item.score}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <p className="analy-remind">
          注：分数由项目白皮书以及整体规划评估而得出，只做投资参考。
        </p>
        <a href={white_paper_url} className="white-paper">
          白皮书
        </a>
      </div>
    );
  }
}
