import React from "react";
import HomeHeaderDynamicNewsContent from "../home-header-dynamic-news-content/index";
import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import "./index.less";
export default class HomeHeaderDynamicNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: ""
    };
  }

  render() {
    return (
      <div className="pc-home-header-dynamic-news">
        <div className="news-content-before" />
        <div className="news-content">
          <h2 className="new-title">NEWS</h2>
          <HomeHeaderDynamicNewsContent newData={this.state.news} />
        </div>
        <div className="news-content-after" />
      </div>
    );
  }
  async componentDidMount() {
    let data = await getData(`${PORTOCAL}/home/news`);
    this.setState({
      news: data
    });
  }
}
