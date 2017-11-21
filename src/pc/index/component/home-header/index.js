import React from "react";
import CommonHeader from "../../../common-component/common-header/index";
import HomeHeaderSlideShow from "../home-header-slideshow/index";
import HomeHeaderDynamicNews from "../home-header-dynamic-news/index";

import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";
export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: null
    };
  }
  render() {
    return (
      <div className="pc-home-header">
        <CommonHeader />
        {/* <HomeHeaderSlideShow imgData={this.state.imgData} /> */}
        {/* <HomeHeaderDynamicNews /> */}
      </div>
    );
  }
  async componentDidMount() {
    let imgs = await getData(`${PORTOCAL}/home/ad`);
    this.setState({
      imgData: imgs
    });
  }
}
