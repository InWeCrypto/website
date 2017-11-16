import React from "react";
import "./index.less";

const Online = () => (
  <div>
    <p>当前价格</p>
    <p>24H最高价格</p>
    <p>最低价格</p>
    <p>24H涨幅</p>
  </div>
);

const Fund = () => {
  <div>
    <p>已达到众筹额</p>
    <p>已收集</p>
    <p>已完成进度</p>
    <h4>众筹中</h4>
  </div>;
};

export default class HomeContentListItemBack extends React.Component {
  render() {
    let { descType } = this.props;
    return (
      <div className="pc-home-content-list-item-back">
        <div className="back-collection" />
        <div className="back-title">
          <h2 className="back-name">name</h2>
          <p className="back-score">score</p>
        </div>
        <div className="back-content">
          {(descType && descType === 5) || descType === 6}}
          <Online />
          {(descType && descType === 7) || descType === 8}}
          <Fund />
        </div>
      </div>
    );
  }
}
