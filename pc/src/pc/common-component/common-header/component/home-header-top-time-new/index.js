import React from "react";
import $ from "jquery";
import timeNew from "../../../../lib/app/img/home_time_new.png";
import { getData } from "../../../../lib/app/js/app";
import { PORTOCAL } from "../../../../lib/app/js/env";
import "babel-polyfill";

import "./index.less";

export default class HomeHeaderTopTimeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.priceData === this.props.priceData) return;
    let arr = [];
    nextProps.priceData.data.map(async item => {
      //   console.log(item);
      //   let d = await getData(`${PORTOCAL}/${item.url}`);
      //   arr.push(d.data);
      //   this.setState({
      //     info: arr
      //   });
      //   console.log(this.state.info);
    });
  }
  componentDidMount() {
    let $ul = $(".new-content");
    var timer = null;
    timer = setInterval(function() {
      scrollList($ul);
    }, 2000);

    function scrollList(obj) {
      var scrollHeight = $(".new-content li:first").height();
      $ul.stop().animate(
        {
          marginTop: -scrollHeight
        },
        1000,
        function() {
          $ul
            .css({
              marginTop: 0
            })
            .find("li:first")
            .appendTo($ul);
        }
      );
    }
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    let { priceData } = this.props;
    let { info } = this.state;
    return (
      <div className="pc-home-header-top-time-new">
        <div className="new-pic">
          <img src={timeNew} />
        </div>
        <div ref="box" className="new-content-box">
          <ul ref="list" className="new-content">
            {info &&
              info.map((item, index) => {
                return (
                  <li className="new-content-text" key={index}>
                    {item.symbol} 实时价格 ${item.price}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
