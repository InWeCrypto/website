import React from "react";
import ReactDOM from "react-dom";
import { Router, Link, Route, hashHistory } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import { getData } from "../lib/app/js/app";
import { PORTOCAL } from "../lib/app/js/env";

import CommonHeader from "../common-component/common-header/index";
import ParticularOnlineMain from "./component/particular-online-main/index";
import ParticularSideBar from "../common-component/particular-sidebar/index";

import "./index.less";
let search = decodeURIComponent(window.location.search);
let projectId = JSON.parse(search.split("?")[1]);
console.log(projectId);
export default class ParticularOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }
  render() {
    console.log(this.state.project);
    return (
      <div className="pc-particular-online">
        <CommonHeader classInfo="nav-item-active" />
        <div className="page-wrap">
          <div className="content">
            <ParticularOnlineMain />
            <ParticularSideBar />
          </div>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let data = await getData(`${PORTOCAL}/${projectId}`);
    this.setState({
      project: data
    });
  }
}

ReactDOM.render(<ParticularOnline />, document.getElementById("root"));
