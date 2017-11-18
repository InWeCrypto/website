import React, { Component } from "react";

import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import "./index.less";
import { div } from "zrender/lib/core/vector";

export default class ParticularOnlineCurrentPrice extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentPrice: props.currentPrice ? props.currentPrice : null
    // };
  }

  render() {
    let { currentPrice } = this.props;
    //console.log(this.props);
    // let { currentPrice } = this.state.currentPrice;
    return (
      <div>
        {!currentPrice && <span />}
        {currentPrice && (
          <ul className="pc-particular-online-current-price">
            <li className="current-price-item">
              <p>当前价格</p>
              <p>{currentPrice && currentPrice.price}</p>
            </li>
            <li className="current-price-item">
              <p>Volume</p>
              <p>{currentPrice && currentPrice["24h_volume_usd"]}</p>
            </li>
            <li className="current-price-item">
              <p>24H-Change</p>
              <p style={{ color: "rgba(34,172,57,1)" }}>
                {currentPrice && currentPrice["24h_change"]}
              </p>
            </li>
            <li className="current-price-item">
              <p>24H最高值</p>
              <p style={{ color: "rgba(255,50,50,1)" }}>
                {currentPrice && currentPrice["24h_max_price"]}
              </p>
            </li>
            <li className="current-price-item">
              <p>24H最低值</p>
              <p style={{ color: "rgba(34,172,57,1)" }}>
                {currentPrice && currentPrice["24h_min_price"]}
              </p>
            </li>
          </ul>
        )}
      </div>
    );
  }
}
