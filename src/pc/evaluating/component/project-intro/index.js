import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

export default class ProjectIntro extends Component {
  render() {
    let { img, desc, website } = this.props;
    return (
      <div>
        <div className="project-intro">
          <h2 className="project-intro-title">项目概述</h2>
          <img className="project-intro-pic" src={img} />
          <p className="project-intro-content">{desc}</p>
          <p className="project-intro-website">官网: {website}</p>
        </div>
      </div>
    );
  }
}
