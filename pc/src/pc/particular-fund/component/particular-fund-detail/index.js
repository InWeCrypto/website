import React, { Component } from "react";
import "./index.less";

export default class ParticularFundDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: props.detailData || null
    };
  }
  componentWillUpdate(nextProps) {
    if (this.props.detailData !== nextProps.detailData) {
      this.setState({
        detailData: nextProps.detailData
      });
    }
  }

  render() {
    let { detailData } = this.props;
    return (
      <div className="pc-particular-fund-detail">
        <h2>ICO细则</h2>
        <h4>TOKEN SALE: {detailData && detailData.token_sale}</h4>
        <div className="list">
          <ul className="list-left">
            <li>
              Ticker:{" "}
              <span className="list-data">
                {detailData && detailData.ticker}
              </span>
            </li>
            <li>
              Token type:{" "}
              <span className="list-data">
                {detailData && detailData.token_type}
              </span>
            </li>
            <li>
              ICO Token Price:{" "}
              <span className="list-data">
                {detailData && detailData.token_price}
              </span>
            </li>
            <li>
              Fundraising Goal:{" "}
              <span className="list-data">
                {detailData && detailData.fundraising_goal}
              </span>
            </li>
            <li>
              Total Tokens:{" "}
              <span className="list-data">
                {detailData && detailData.total_tokens}
              </span>
            </li>
            <li>
              Available for Token Sale:{" "}
              <span className="list-data">
                {detailData && detailData.available_for_token_sale}
              </span>
            </li>
          </ul>
          <ul className="list-right">
            <li>
              Whitelist:{" "}
              <span className="list-data">
                {detailData && detailData.whitelist}
              </span>
            </li>
            <li>
              Know Your Customer (KYC):{" "}
              <span className="list-data">{detailData && detailData.kyc}</span>
            </li>
            <li>
              Min/Max Personal Cap:{" "}
              <span className="list-data">
                {detailData && detailData.person_cap}
              </span>
            </li>
            <li>
              Token Issue:{" "}
              <span className="list-data">
                {detailData && detailData.token_issue}
              </span>
            </li>
            <li>
              Token Issue:{" "}
              <span className="list-data">
                {detailData && detailData.accepts}
              </span>
            </li>
          </ul>
        </div>
        <a className="offcial-website" href={detailData && detailData.url}>
          官网
        </a>
      </div>
    );
  }
}
