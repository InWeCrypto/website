import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import CommonHeader from "../common-component/common-header/index";
import AllInfoDetail from "../common-component/all-info-detail/index";

import { getData } from "../lib/app/js/app";
import { PORTOCAL } from "../lib/app/js/env";

import img_col from "../lib/app/img/all-info-detail-page_icon_like.png";
import img_no_col from "../lib/app/img/all-info-detail-page_icon_unlike.png";

import pace from "../lib/app/js/pace/pace.js";
import "../lib/app/less/pace.less";

import "./index.less";
let search = window.location.search;
let id = search.split("?")[1];
let item = localStorage.getItem(id);
let data = JSON.parse(item);
export default class AllInfoDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: null
    };
  }
  render() {
    let { detailData } = this.state;
    console.log(detailData);
    return (
      <div className="pc-all-info-detail-page">
        <CommonHeader classInfo="nav-item-active" />
        <div className="page-wrap">
          {detailData && (
            <div className="content">
              <h2>{detailData.title}</h2>
              <AllInfoDetail
                img_col={img_col}
                img_no_col={img_no_col}
                className="reply-detail"
                date={detailData.date}
                read={detailData.read}
                reply={detailData.reply}
              />
              <div ref="detail" className="detail-text" />
              <div className="chat">
                <a />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    pace.start();
    let d = await getData(`${PORTOCAL}/article/${data.id}`);
    this.setState({
      detailData: d.data
    });
    // pace.off();
    let p = this.refs.detail;
    $(p).html(`${this.state.detailData.content}`);
  }
}

ReactDOM.render(<AllInfoDetailPage />, document.getElementById("root"));
