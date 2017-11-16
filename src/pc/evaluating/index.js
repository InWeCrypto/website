import "./index.less";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import CommonHeader from "../common-component/common-header/index";
import List from "./component/list/";
import Detail from "./component/detail/";

export default class Evaluating extends Component {
  render() {
    return (
      <Router>
        <div className="pc-price-market">
          <CommonHeader classIco="nav-item-active" />
          <div className="page-wrap">
            <div className="container">
              <Switch>
                <Route path="/detail" component={Detail} />
                <Route path="/" component={List} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(<Evaluating />, document.getElementById("root"));
