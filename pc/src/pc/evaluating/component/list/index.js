import "./index.less";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import pace from "../../../lib/app/js/pace/pace.js";
import "../../../lib/app/less/pace.less";

import { Link } from "react-router-dom";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  getListData() {
    pace.start();
    getData(`${PORTOCAL}/article/ico`)
      .then(data => {
        if (data.code === 4000) {
          this.setState({
            list: [...data.data]
          });
          // pace.off();
        } else {
          //  pace.off();
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }
  componentDidMount() {
    this.getListData();
  }
  goWebsite(idx, e) {
    e.stopPropagation();
    window.open(this.state.list[idx].website);
  }
  render() {
    return (
      <div className="list-box">
        {this.state.list.length > 0 &&
          this.state.list.map((item, index) => {
            return (
              <Link
                to={{
                  pathname: "/detail",
                  search: "?id=" + item.id
                }}
                key="index"
                className="list-item"
              >
                <img className="list-img" src={item.img} />
                <div className="list-info">
                  <h3 className="list-title">{item.title}</h3>
                  <div className="list-t">目前状态：{item.assess_status}</div>
                  <div className="list-t">
                    官网：<span
                      className="a"
                      onClick={this.goWebsite.bind(this, index)}
                    >
                      {item.website}
                    </span>
                  </div>
                  <div className="list-t">时间：{item.created_at}</div>
                </div>
              </Link>
            );
          })}
        {this.state.list.length == 0 && (
          <div style={{ padding: "200px 0" }}>暂无数据</div>
        )}
      </div>
    );
  }
}
