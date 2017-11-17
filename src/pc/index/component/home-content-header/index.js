import React from "react";

import "./index.less";
const W = 1140;
export default class HomeContentHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowLeft: 0
    };
  }
  prevHandler = () => {
    console.log(this.props);
    let { scrollLeft, listWidth } = this.props;
    let _arrowleft = this.state.arrowLeft;
    if (scrollLeft > 0) {
      if (scrollLeft >= W) {
        this.setState({
          arrowLeft: _arrowleft - W
        });
      } else {
        this.setState({
          arrowLeft: _arrowleft - (listWidth - W)
        });
      }
    } else {
      this.setState({
        arrowLeft: 0
      });
    }
    this.props.getMove(this.state.arrowLeft);
  };

  nextHandler = () => {
    let { scrollLeft, listWidth } = this.props;
    let _arrowleft = this.state.arrowLeft;
    if (scrollLeft < listWidth - W) {
      if (listWidth - W >= W) {
        this.setState({
          arrowLeft: _arrowleft + W
        });
      } else {
        this.setState({
          arrowLeft: _arrowleft + (listWidth - W)
        });
      }
      this.props.getMove(this.state.arrowLeft);
    } else {
      return;
    }
  };

  render() {
    let { scrollLeft, listWidth } = this.props;
    return (
      <div className="pc-home-content-header">
        <h2>项目</h2>
        <div className="split">
          <div className="split-line">
            <span className="split-line-show" />
            <span className="split-line-grey" />
          </div>
          <div className="change">
            <span className="change-prev" onClick={this.prevHandler} />
            <span className="change-next" onClick={this.nextHandler} />
          </div>
        </div>
      </div>
    );
  }
}
