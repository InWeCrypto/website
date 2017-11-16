import React, { Component } from "react";

import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import "./index.less";

export default class ParticularOnlineCurrentPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: this.props.currentPrice
    };
  }

  render() {
    let { currentPrice } = this.props;
    // let { currentPrice } = this.state.currentPrice;
    return (
      <ul className="pc-particular-online-current-price">
        <li className="current-price-item">
          <p>当前价格</p>
          <p>{currentPrice && currentPrice.market_cap_usd}</p>
        </li>
        <li className="current-price-item">
          <p>Volume</p>
          <p>{currentPrice && currentPrice["24h_volume_usd"]}</p>
        </li>
        <li className="current-price-item">
          <p>24H-Change</p>
          <p style={{ color: "rgba(34,172,57,1)" }}>
            {currentPrice && currentPrice.percent_change_24h}
          </p>
        </li>
        <li className="current-price-item">
          <p>24H最高值</p>
          <p style={{ color: "rgba(255,50,50,1)" }}>
            {currentPrice && currentPrice.total_supply}
          </p>
        </li>
        <li className="current-price-item">
          <p>24H最低值</p>
          <p style={{ color: "rgba(34,172,57,1)" }}>
            {currentPrice && currentPrice.available_supply}
          </p>
        </li>
      </ul>
    );
  }
}
