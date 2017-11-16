import React from "react";
import HomeContentListItemBack from "../home-content-list-item-back/index";

import "./index.less";

const Text = {
  "2": "轮播",
  "3": "download",
  "4": "视频",
  "5": "已上线",
  "6": "待上线",
  "7": "众筹中",
  "8": "即将众筹"
};

export default class HomeContentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width || 0,
      height: props.height || 0,
      transY: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      width: nextProps.width || 0,
      height: nextProps.height || 0
    });
  }
  mouseoverHandler = e => {
    this.setState({
      transY: 180
    });
  };
  mouseoutHandler = e => {
    this.setState({
      transY: 0
    });
  };

  render() {
    let {
      width,
      height,
      top,
      left,
      text,
      id,
      src,
      score,
      descType
    } = this.props;
    let link = "";
    if (descType === 5 || descType === 6) {
      link = `../../../particular-online?${id}`;
    } else if (descType === 7 || descType === 8) {
      link = `../../../particular-fund?${id}`;
    }
    return (
      <div
        onMouseOver={this.mouseoverHandler}
        onMouseOut={this.mouseoutHandler}
        ref="item"
        className="pc-home-content-list-item"
        data-id={id}
        style={{
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
          transform: `rotateY(${this.state.transY}deg)`
        }}
      >
        <a href={link}>
          <div className="list-item-content">
            <img src={src} />
            <div className="item-score">{score}</div>
            <h2>{name}</h2>
            <p>{Text[descType]}</p>
          </div>
        </a>
      </div>
    );
  }
}
