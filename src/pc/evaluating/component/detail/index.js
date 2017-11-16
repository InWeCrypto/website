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
      query: null,
      viewData: null
    };
  }
  componentWillMount() {
    var q = getQuery(this.props.location.search);
    this.setState({
      query: q
    });
  }
  componentDidMount() {
    getData(`${PORTOCAL}/article/ico/` + this.state.query.id)
      .then(data => {
        console.log(data);
        if (data.code === 4000) {
          this.setState({
            viewData: { ...data.data[0] }
          });
        } else {
          throw new error(data.msg);
        }
      })
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }
  render() {
    let cont = this.state.viewData;
    return (
      <div className="detail-box">
        {cont && (
          <div className="detail">
            <div className="detail-title">{cont.title}</div>
            <div className="detail-time">更新于：{cont.created_at}</div>
            <div className="detail-box1">
              <div className="box1-left">
                <div className="circle">7.9</div>
                <div className="state">上线交易中</div>
              </div>
              <div className="box1-middle">11</div>
              <div className="box1-right">
                <span className="right-item">山鸡山鸡山鸡</span>
                <br />
                <span className="right-item">山鸡山鸡山鸡</span>
              </div>
            </div>
          </div>
        )}
        {!cont && <div style={{ padding: "200px 0" }}>无法查询到数据</div>}
      </div>
    );
  }
}
