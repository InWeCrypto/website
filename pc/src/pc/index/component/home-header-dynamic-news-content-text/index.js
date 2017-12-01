import React from "react";
//import { PORTOCAL } from "../lib/app/js/env";
import "./index.less";

export default class HomeHeaderDynamicNewsContentText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "英国公司在名字里加入区块链后股价上涨 400%",
      content: "英国公司在名字里加入区块链后股价上涨 400%,英国公司在名字里加入区块链后股价上涨 400%..."
    };
  }
  render() {
    let { title, content, url } = this.props;
    let t = title || this.state.title;
    let c = content || this.state.content;
    return (
      <a className="dynamic-link" href={url}>
        <h3>{t}</h3>
        <p className="dynamic-text">{c}</p>
      </a>
    );
  }
}
