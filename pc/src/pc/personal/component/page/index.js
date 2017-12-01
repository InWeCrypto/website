import "./index.less";
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import Menu from "../menu/";
import PersonalTop from "../personal-top";
import Revise from "../revise/";
import Collect from "../collect/";
import Message from "../message/";

export default class Page extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menuIndex: 0
  };

  render() {
    return (
      <div className="personal-container">
        <div className="personal-tip" />
        <div className="personal-cont">
          <PersonalTop />
          <div className="personal">
            <div className="personal-left">
              <Menu act-index={this.state.menuIndex} />
            </div>
            <div className="persoal-right">
              <Switch>
                <Route path="/collect" component={Collect} />
                <Route path="/revise" component={Revise} />
                <Route path="/message" component={Message} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
