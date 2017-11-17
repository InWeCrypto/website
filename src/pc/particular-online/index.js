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
let projectId = search.split("?")[1];

export default class ParticularOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theProject: null
    };
  }
  render() {
    return (
      <div className="pc-particular-online">
        <CommonHeader classInfo="nav-item-active" />
        <div className="page-wrap">
          <div className="content">
            <ParticularOnlineMain totalData={this.state.theProject} />
            <ParticularSideBar totalData={this.state.theProject} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    getData(`${PORTOCAL}/project/${projectId}`).then(data => {
      if (data.code === 4000) {
        this.setState({
          theProject: data.data
        });
      } else {
        throw new Error(data.msg);
      }
    });
  }
}

ReactDOM.render(<ParticularOnline />, document.getElementById("root"));
