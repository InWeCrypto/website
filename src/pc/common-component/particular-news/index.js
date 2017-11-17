import React from "react";
import { switchCard } from "../../lib/app/js/app";
import "./index.less";
import { getData } from "../../lib/app/js/app";
import { PORTOCAL } from "../../lib/app/js/env";
export default class ParticularNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "视频",
      id: props.projectId ? props.projectId : null,
      mediaList: [],
      imgTxtList: [],
      curIndex: 0,
      isLoaded: false
    };
  }
  componentWillMount() {
    if (!this.state.isLoaded && this.state.id) {
      this.getList("video");
      this.getList("img-txt");
      this.setState({
        isLoaded: true
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.projectId
    });
  }
  componentWillUpdate() {
    if (!this.state.isLoaded && this.state.id) {
      this.getList("video");
      this.getList("img-txt");
      this.setState({
        isLoaded: true
      });
    }
  }
  getList(type) {
    if (!this.state.id) {
      return;
    }
    getData(`${PORTOCAL}/category/${this.state.id}/${type}`);
    then(data => {
      console.log(data);
      if (data.code === 4000) {
      } else {
        throw new Error(data.msg);
      }
    }).catch(e => {
      alert(e.toString().replace("Error:", ""));
    });
  }
  curTab(idx) {
    return idx === this.state.curIndex
      ? "news-title news-title-active"
      : "news-title";
  }
  switchHandler(idx) {
    console.log(idx);
    this.setState({
      curIndex: idx
    });
  }
  render() {
    let curIndex = this.state.curIndex;
    return (
      <div className="pc-particular-news">
        <h2 className="particular-news-title">INWE报道</h2>
        <ul className="news-list">
          <li
            onClick={this.switchHandler.bind(this, 0)}
            className={this.curTab(0)}
          >
            视频
          </li>
          <li
            onClick={this.switchHandler.bind(this, 1)}
            className={this.curTab(1)}
          >
            图文
          </li>
        </ul>
        {curIndex == 0 && (
          <ul className="news-card-wrap">
            <li className="news-card">
              <div className="new-pic">
                {/* {video ? <video src="" controls="controls" /> : <img src="" />} */}
              </div>
              <div className="news-content">
                <h2>Kyber Network ICO Review Kyber Network ICO Review ...</h2>
                <p>{this.state.text}</p>
                <p>time</p>
              </div>
              <a href="../../all-info-detail-page" className="link" />
            </li>
          </ul>
        )}
      </div>
    );
  }
}
