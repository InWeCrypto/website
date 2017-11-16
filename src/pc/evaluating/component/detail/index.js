import "./index.less";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";
export default class Detail extends Component {
  constructor(props, content) {
    super(props);
    this.state = {
      query: null
    };
  }
  componentWillMount() {
    var q = getQuery(this.props.location.search);
    this.setState({
      query: q
    });
  }
  componentDidMount() {}
  render() {
    return (
      <div className="detail-box">
        <div className="detail">
          <div className="detail-title">sss</div>
          <div className="detail-time">更新于：2017-14-20 11：11：11</div>
        </div>
      </div>
    );
  }
}
