import React from "react";
import ReactDOM from "react-dom";
import CommonHeader from "../common-component/common-header/index";
import ParticularFundMain from "./component/particular-fund-main/index";
import ParticularSideBar from "../common-component/particular-sidebar/index";
import { getData } from "../lib/app/js/app";
import { PORTOCAL } from "../lib/app/js/env";

import "./index.less";
let search = decodeURIComponent(window.location.search);
let projectId = JSON.parse(search.split("?")[1]);

export default class ParticularFund extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theProject: null
    };
  }
  render() {
    let { theProject } = this.state;
    return (
      <div className="pc-particular-fund">
        <CommonHeader classInfo="nav-item-active" />
        <div className="page-wrap">
          <div className="content">
            <ParticularFundMain contentData={theProject} />
            <ParticularSideBar />
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let data = await getData(`${PORTOCAL}/project/${projectId}`);
    this.setState({
      theProject: data
    });
  }
}

ReactDOM.render(<ParticularFund />, document.getElementById("root"));
