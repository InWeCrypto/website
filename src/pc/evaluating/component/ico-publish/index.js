import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

export default class IcoPublish extends Component {
  render() {
    let { publish } = this.props;
    return (
      <div>
        <div className="ico-publish">
          <h2 className="ico-publish-title">ICO发行情况</h2>
          <ul className="ico-publish-table">
            <li className="ico-publish-item">
              <h4>众筹时间</h4>
              <p>ico-publish</p>
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
          </ul>
        </div>
      </div>
    );
  }
}
