import React from "react";
import ReactDOM from "react-dom";
import { Router, Link, Route, hashHistory } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import $ from "jquery";

import HomeHeader from "./component/home-header/index";
import HomeContent from "./component/home-content/index";
import HomeFooter from "./component/home-footer/index";
import HomeCopyRight from "./component/home-copy-right/index";
import HomeHeaderDynamicNews from "./component/home-header-dynamic-news/index";

import "./index.less";

export default class Home extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = e => {
    let scrollT = document.querySelectorAll("html")[0].scrollTop;
    let fixD = this.refs.fixD;
    let dynamicNews = this.refs.dynamicNews.refs.news;
    let offsetTop = fixD.offsetTop;
    let screenH = window.innerHeight;
    let diff = offsetTop - screenH + 100;
    console.log(diff);
    console.log(scrollT);
    if (scrollT >= diff) {
      $(dynamicNews).css("position", "static");
    } else {
      $(dynamicNews).css("position", "fixed");
    }
  };
  render() {
    const history = createBrowserHistory();
    //  console.log(this.state.theState);
    return (
      <div className="home">
        <HomeHeader />
        <HomeContent />
        <div className="fix-dynamic" ref="fixD" />
        <HomeHeaderDynamicNews ref="dynamicNews" />
        <HomeFooter />
        <HomeCopyRight />
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
