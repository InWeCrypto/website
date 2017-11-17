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
  componentDidUpdate() {
    if (!this.state.isLoaded && this.state.id) {
      this.setState({
        isLoaded: true
      });
      this.getList("video");
      this.getList("img-txt");
    }
  }
  getList(type) {
    if (!this.state.id) {
      return;
    }
    getData(`${PORTOCAL}/category/${this.state.id}/articles/${type}`)
      .then(data => {
        if (data.code === 4000) {
          if (type == "video") {
            this.setState({
              mediaList: [...data.data]
            });
          } else {
            this.setState({
              imgTxtList: [...data.data]
            });
          }
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }
  curTab(idx) {
    return idx === this.state.curIndex
      ? "news-title news-title-active"
      : "news-title";
  }
  switchHandler(idx) {
    this.setState({
      curIndex: idx
    });
  }
  goVideo(url) {
    window.open(url);
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
        {curIndex == 0 &&
          this.state.mediaList.length > 0 && (
            <ul className="news-card-wrap">
              {this.state.mediaList &&
                this.state.mediaList.map((item, index) => {
                  return (
                    <li
                      className="news-card"
                      onClick={this.goVideo.bind(this, item.video)}
                      key={index}
                    >
                      <div className="news-pic">
                        {item.img ? <img className="img" src={item.img} /> : ""}
                      </div>
                      <div className="news-content">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <p>{item.created_at}</p>
                      </div>
                      <a href="../../all-info-detail-page" className="link" />
                    </li>
                  );
                })}
            </ul>
          )}
        {curIndex == 0 &&
          this.state.mediaList.length == 0 && (
            <div style={{ padding: "100px 0", textAlign: "center" }}>暂无数据</div>
          )}
        {curIndex == 1 &&
          this.state.imgTxtList.length > 0 && (
            <ul className="news-card-wrap">
              {this.state.imgTxtList &&
                this.state.imgTxtList.map((item, index) => {
                  return (
                    <li className="news-card" key={index}>
                      <div className="news-pic">
                        {item.img ? <img className="img" src={item.img} /> : ""}
                      </div>
                      <div className="news-content">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                        <p>{item.created_at}</p>
                      </div>
                      <a href="../../all-info-detail-page" className="link" />
                    </li>
                  );
                })}
            </ul>
          )}
        {curIndex == 1 &&
          this.state.imgTxtList.length == 0 && (
            <div style={{ padding: "100px 0", textAlign: "center" }}>暂无数据</div>
          )}
      </div>
    );
  }
}
