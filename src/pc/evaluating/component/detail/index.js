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
                  风险等级 :{" "}
                  <span
                    className="risk-level-color"
                    style={{ background: cont.risk_level_color }}
                  />{" "}
                  {cont.risk_level_name}
                </div>
              </div>
              <div className="box1-right">
                {cont.tags.map(item => {
                  return (
                    <span key={item.id} className="right-item">
                      {item.tag_info.name}
                    </span>
                  );
                })}
              </div>
            </div>
            <p className="remind">
              郑重声明：所有 ICO 都有归 ０
              的风险，所有信息仅供参考，不构成任何投资发起
            </p>
            <ProjectIntro
              img={cont.img}
              desc={cont.desc}
              website={cont.website}
            />
            <IcoPublish
              ico_assess_issue_info={cont.ico_assess_issue_info}
              unit={cont.ico.unit}
            />
            <Strcture ico_assess_structure={cont.ico_assess_structure} />
            <ProjectAnaly
              ico_assess_project_analyse={cont.ico_assess_project_analyse}
              white_paper_url={cont.white_paper_url}
            />
            {/* {iframeUrl && <iframe src={iframeUrl} className="introduce-text" />} */}
            {/* <iframe src="" className="introduce-text" /> */}
          </div>
        )}
        {!cont && <div style={{ padding: "200px 0" }}>无法查询到数据</div>}
      </div>
    );
  }
}
