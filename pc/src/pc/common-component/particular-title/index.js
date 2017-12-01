import React from "react";
import "./index.less";

const ONLINE = "../../particular-online/?";
const FUND = "../../particular-fund/?";
var d = sessionStorage.getItem("project");
var data = JSON.parse(d);
var compare = function(obj1, obj2) {
  let a = obj1.id;
  let b = obj2.id;
  return a - b;
};
data.sort(compare);
export default class ParticularTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      linkId: ""
    };
  }
  commonHandle = index => {
    this.setState({
      linkId: data[index].id
    });
    if (data[index].type === 5 || data[index].type === 6) {
      this.setState({
        src: ONLINE
      });
    } else if (data[index].type === 7 || data[index].type === 8) {
      this.setState({
        src: FUND
      });
    } else {
      this.setState({
        src: "",
        linkId: ""
      });
    }
  };
  preHandle = () => {
    let id = this.props.id;
    let that = this;
    data.map((item, index) => {
      if (item.id === id) {
        if (index - 1 >= 0) {
          this.commonHandle(index - 1);
        }
      }
    });
  };
  nextHandle = () => {
    let id = this.props.id;
    data.map((item, index) => {
      if (item.id === id) {
        if (index + 1 < data.length) {
          this.commonHandle(index + 1);
        }
      }
    });
  };
  render() {
    console.log("this is title page");
    let fund = true;
    let { title, score, id } = this.props;
    let { src, linkId } = this.state;
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="pc-particular-title">
        <h2>{this.props.name}</h2>
        <h4>
          {title} <span style={{ color: "#ff3232" }}>{score}</span>
        </h4>
        <div className="change-page">
          <a
            className="change-page-prev"
            onClick={this.preHandle}
            href={`${src}${linkId}`}
          />
          <a
            className="change-page-next"
            onClick={this.nextHandle}
            href={`${src}${linkId}`}
          />
        </div>
      </div>
    );
  }
}
