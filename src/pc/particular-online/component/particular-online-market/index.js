import React, { Component } from "react";
import ParticularOnlineTable from "../particular-online-table/index";
import "./index.less";

import { getData, switchCard } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

export default class ParticularOnlineMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      choice: "ETH",
      list: {},
      project_markets: props.project_markets ? props.project_markets : null,
      isLoaded: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      project_markets: nextProps.project_markets
    });
  }
  componentDidUpdate() {
    this.getMarketData();
  }
  getMarketData() {
    let url = "";
    if (
      !this.state.project_markets ||
      this.state.project_markets.length == 0 ||
      this.state.isLoaded
    ) {
      return;
    }
    this.state.project_markets.map(item => {
      if (item.en_name == this.state.choice) {
        url = item.url;
      }
    });
    getData(`${PORTOCAL}/${url}`)
      .then(data => {
        console.log(data);
        if (data.code === 4000) {
          this.setState({
            list: data.data,
            isLoaded: true
          });
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }

  showHandler = () => {
    this.setState({
      show: true
    });
  };
  choiceHandler1 = e => {
    this.setState({
      show: false,
      choice: e.target.innerHTML,
      isLoaded: false
    });
  };
  choiceHandler2 = e => {
    this.setState({
      show: false,
      choice: e.target.innerHTML,
      isLoaded: false
    });
  };
  render() {
    let { project_markets } = this.props;
    return (
      <div className="pc-particular-online-market">
        <h2 className="market-title">交易市场</h2>
        <div className="market-drop-text" onClick={this.showHandler}>
          {this.state.choice}
          <span className="market-drop-icon" />
        </div>
        <ul
          className="market-drop"
          style={{ display: this.state.show ? "flex" : "none" }}
        >
          <li onClick={this.choiceHandler1} className="market-drop-item">
            ETH
          </li>
          <li onClick={this.choiceHandler2} className="market-drop-item">
            BTC
          </li>
        </ul>
        <ParticularOnlineTable list={this.state.list} />
      </div>
    );
  }
}
