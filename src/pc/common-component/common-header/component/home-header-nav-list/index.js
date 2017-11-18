import React from "react";
import { cls } from "../../../../lib/app/js/app";
import "./index.less";

export default class HomeHeaderNavList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  onClick = e => {
    let parent = e.target.parentNode;
    let children = parent.children;
    for (let key in children) {
      if (children[key].className) {
        children[key].className = children[key].className.replace(
          " nav-item-active",
          ""
        );
      }
    }
    e.target.className += " nav-item-active";
  };
  changeLanuage = () => {
    let _show = this.state.show;
    this.setState({
      show: !_show
    });
  };

  render() {
    let { show } = this.state;
    let { classIco, classPrice, classBrowser, classInfo } = this.props;
    return (
      <div className="pc-home-header-nav-list">
        <a
          className={cls("nav-item", classIco)}
          onClick={e => this.onClick(e)}
          href="../../../../evaluating/"
        >
          Ico评测
        </a>
        <a
          className={cls("nav-item", classPrice)}
          onClick={e => this.onClick(e)}
          href="../../../../price-market/"
        >
          行情
        </a>
        <a
          className={cls("nav-item", classBrowser)}
          onClick={e => this.onClick(e)}
          href="../../particular-online/"
        >
          浏览器
        </a>
        <a
          className={cls("nav-item", classInfo)}
          onClick={e => this.onClick(e)}
          href="../../all-info/"
        >
          所有资讯
        </a>
        <div
          className="nav-item nav-item-language"
          onClick={this.changeLanuage}
        >
          <p>
            语言<span className="dropdown-icon" />
          </p>
          <div
            className="nav-item-language-dropdown"
            style={{ display: show ? "block" : "none" }}
          >
            <span className="dropdown-triangle" />
            <span className="item">中文</span>
            <span className="item item-active">英文</span>
            <span className="item">日文</span>
          </div>
        </div>
      </div>
    );
  }
}
