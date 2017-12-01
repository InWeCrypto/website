import React from "react";
import { switchCard } from "../../lib/app/js/app";
import "./index.less";
import { List } from "echarts/lib/export";
import { PORTOCAL } from "../../lib/app/js/env";

export default class ParticularProjectIntroduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleArr: props.data ? props.data : [],
      curIndex: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      titleArr: nextProps.data
    });
  }

  changePage(idx) {
    this.setState({
      curIndex: idx
    });
  }
  render() {
    let titleArr = this.state.titleArr;
    let getClass = idx => {
      return idx == this.state.curIndex
        ? "introduce-title introduce-title-active"
        : "introduce-title";
    };
    let iframeUrl =
      this.state.titleArr.length > 0
        ? `${PORTOCAL}/article/${this.state.titleArr[this.state.curIndex].id}`
        : "";
    return (
      <div className="pc-particular-project-introduce">
        <ul className="introduce-title-list">
          {titleArr &&
            titleArr.map((item, index) => {
              return (
                <li
                  onClick={this.changePage.bind(this, index)}
                  className={getClass(index)}
                  key={index}
                >
                  {item.title}
                </li>
              );
            })}
        </ul>
        {iframeUrl && <iframe src={iframeUrl} className="introduce-text" />}
      </div>
    );
  }
}
