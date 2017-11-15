import React from "react";
import "./index.less";
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
    let { width, height, top, left, text, id } = this.props;
    return (
      <div
        //onMouseOver={this.mouseoverHandler}
        // onMouseOut={this.mouseoutHandler}
        ref="item"
        className="pc-home-content-list-item"
        data-id={id}
        style={{
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
          transform: `rotateY(${this.state.transY}deg)`
        }}
      >
        {text}
        <div className="list-item-back">-----------{text}--------------</div>
      </div>
    );
  }
}
