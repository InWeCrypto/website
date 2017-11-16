import React from "react";
import $ from "jquery";
import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";
import "babel-polyfill";

import ParticularTitle from "../../../common-component/particular-title/index";
import ParticularOnlineContent from "../particular-online-content/index";
import ParticularOnlineMarket from "../particular-online-market/index";
import ParticularProjectIntroduce from "../../../common-component/particular-project-introduce/index";
import ParticularNews from "../../../common-component/particular-news/index";

import "./index.less";

export default class ParticularOnlineMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        intro: "项目介绍页",
        point: "针对痛点",
        team: "团队介绍页面",
        example: "应用案例页面"
      }
    };
  }

  render() {
    let { totalData } = this.props;
    return (
      <div className="pc-particular-online-main">
        <ParticularTitle />
        <ParticularOnlineContent
          project_time_prices={totalData && totalData.project_time_prices}
        />
        <ParticularOnlineMarket
          project_markets={totalData && totalData.project_markets}
        />
        <ParticularProjectIntroduce data={this.state.info} />
        <ParticularNews />
      </div>
    );
  }
}
