import React from "react";
import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import like from "../../../lib/app/img/icon_Favorites.png";
import unlike from "../../../lib/app/img/icon_noFavorites.png";

import "./index.less";

// const Online = () => (
//   <div>
//     <p>当前价格</p>
//     <p>24H最高价格</p>
//     <p>最低价格</p>
//     <p>24H涨幅</p>
//   </div>
// );

// const Fund = () => (
//   <div>
//     <p>已达到众筹额</p>
//     <p>已收集</p>
//     <p>已完成进度</p>
//     <h4>众筹中</h4>
//   </div>
// );

export default class HomeContentListItemBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backData: null
    };
  }
  render() {
    let { background, url, collection, descType, backData } = this.props;
    return (
      <div
        className="pc-home-content-list-item-back"
        style={{ background: `${background}` }}
      >
        <div className="back-collection">
          <img src={collection ? like : unlike} />
        </div>
        <div className="back-title">
          <h2 className="back-name">{backData && backData.name}</h2>
          <p className="back-score">{backData && backData.score}</p>
        </div>
        <div className="back-content">
          <div>
            <p>当前价格: {backData && backData.price} </p>
            <p>24H最高价格: {backData && backData["24h_max_price"]}</p>
            <p>24H最低价格: {backData && backData["24h_min_price"]}</p>
            {/* <p>24H涨幅: {backData && backData.percent_change_24h}</p> */}
          </div>
        </div>
      </div>
    );
  }
}
