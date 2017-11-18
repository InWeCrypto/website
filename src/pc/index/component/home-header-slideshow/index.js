import React from "react";
import Slider from "react-slick";
import "babel-polyfill";
import { PORTOCAL } from "../../../lib/app/js/env";
import HomeHeaderDynamicNews from "../home-header-dynamic-news/index";

import "./index.less";

export default class HomeHeaderSlideShow extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpend: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let { imgData } = this.props;
    console.log(imgData);
    return (
      <div className="slide-wrap">
        <div className="pc-home-header-slide-show">
          <Slider {...settings}>
            {imgData !== null
              ? imgData.data.list.map(img => {
                  return (
                    <div key={img.id}>
                      <img src={`${img.img}`} className="slide-page" />
                    </div>
                  );
                })
              : null}
          </Slider>
          <HomeHeaderDynamicNews />
        </div>
      </div>
    );
  }
}
