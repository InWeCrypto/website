import React from "react";
import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";
import $ from "jquery";

import HomeContentHeader from "../home-content-header/index";
import HomeContentList from "../home-content-list/index";

import "./index.less";
export default class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      scrollLeft: 0,
      listWidth: 0,
      listScroll: 0,
      move: 0
    };
  }
  getMove(move) {
    this.setState({
      move: move,
      scrollLeft: move
    });
  }
  componentDidUpdate(nextP, nextS) {
    if (this.state.move !== nextS.move) {
      let li = this.refs.cardList.refs.list;
      $(li).animate(
        {
          scrollLeft: this.state.move
        },
        600
      );
    }
  }
  render() {
    let { scrollLeft, listWidth, move } = this.state;
    return (
      <div className="pc-home-content">
        <HomeContentHeader
          scrollLeft={scrollLeft}
          listWidth={listWidth}
          getMove={this.getMove.bind(this)}
        />
        <div className="content-list-wrap">
          <HomeContentList ref="cardList" project={this.state.project} />
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let data = await getData(`${PORTOCAL}/home/project`);
    this.setState({
      project: data
    });
    this.setState({
      scrollLeft: this.refs.cardList.refs.list.scrollLeft,
      listWidth: this.refs.cardList.refs.list.scrollWidth
    });
    //  console.log(this.refs.cardList.refs);
  }
}
