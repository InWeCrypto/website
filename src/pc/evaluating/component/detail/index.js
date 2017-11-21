import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import ProjectIntro from "../project-intro/index";
import IcoPublish from "../ico-publish/index";
import Strcture from "../strcture/index";
import ProjectAnaly from "../project-analy/index";

import "./index.less";
export default class Detail extends Component {
  constructor(props, content) {
    super(props);
    this.state = {
      query: null,
      viewData: null,
      intro: null
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
        if (data.code === 4000) {
          this.setState({
            viewData: data.data
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
    let { intro } = this.state;
    //console.log(cont);
    return (
      <div className="detail-box">
        {cont && (
          <div className="detail">
            <h1 className="detail-title">{cont.title}</h1>
            <div className="detail-time">更新于：{cont.created_at}</div>
            <div className="detail-box1">
              <div className="box1-left">
                <div className="circle">{cont.ico_score}</div>
                <div className="state">上线交易中</div>
              </div>
              <div className="box1-middle">
                <div className="risk-level">
                  风险等级 : <span className="risk-level-color1" /> 极高
                </div>
                <div className="risk-level">
                  风险等级 : <span className="risk-level-color2" /> 中
                </div>
              </div>
              <div className="box1-right">
                <span className="right-item">山鸡山鸡山鸡</span>
                <br />
                <span className="right-item">山鸡山鸡山鸡</span>
              </div>
            </div>
            <p className="remind">郑重声明：所有 ICO 都有归 ０ 的风险，所有信息仅供参考，不构成任何投资发起</p>
            <ProjectIntro
              img={cont.img}
              desc={cont.desc}
              website={cont.website}
            />
            <IcoPublish />
            <Strcture />
            <ProjectAnaly />
            {/* {iframeUrl && <iframe src={iframeUrl} className="introduce-text" />} */}
            <iframe src="" className="introduce-text" />
          </div>
        )}
        {!cont && <div style={{ padding: "200px 0" }}>无法查询到数据</div>}
      </div>
    );
  }
}
