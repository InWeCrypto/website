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
      choice:
        props.project_markets && props.project_markets.length > 0
          ? props.project_markets[0].en_name
          : null,
      list: {},
      project_markets: props.project_markets ? props.project_markets : null,
      isLoaded: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      project_markets: nextProps.project_markets,
      choice: nextProps.project_markets[0]
        ? nextProps.project_markets[0].en_name
        : null
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
        if (data.code === 4000) {
          console.log(data);
          this.setState({
            list: data.data,
            isLoaded: true
          });
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        //alert(e.toString().replace("Error:", ""));
      });
  }

  showHandler = () => {
    this.setState({
      show: true
    });
  };
  choiceHandler(e) {
    this.setState({
      show: false,
      choice: e.target.innerHTML,
      isLoaded: false
    });
  }

  render() {
    let { project_markets } = this.props;
    console.log("this.props");
    return (
      <div>
        {project_markets && (
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
              {project_markets &&
                project_markets.length > 0 &&
                project_markets.map((item, index) => {
                  return (
                    <li
                      onClick={this.choiceHandler.bind(this)}
                      className="market-drop-item"
                      key={index}
                    >
                      {item.en_name}
                    </li>
                  );
                })}
            </ul>
            <ParticularOnlineTable list={this.state.list} />
          </div>
        )}
      </div>
    );
  }
}
