import React from "react";
import news_arrow_left from "../../../lib/app/img/home_news_arrow_left.png";
import news_arrow_right from "../../../lib/app/img/home_news_arrow_right.png";
import news_arrow_down from "../../../lib/app/img/home_news_arrow_down.png";
import news_arrow_more from "../../../lib/app/img/home_news_arrow_more.png";
import HomeHeaderDynamicNewsContentText from "../../component/home-header-dynamic-news-content-text/index";
import Slider from "react-slick";
import "babel-polyfill";

import "./index.less";
export default class HomeHeaderDynamicNewsContent extends React.Component {
  render() {
    let { newData } = this.props;
    let settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="pc-home-header-dynamic-news-content">
        <div className="news-arrow-down">
          <img src={news_arrow_down} />{" "}
        </div>
        <div className="new-main">
          {/* <div className="news-arrow-left"><img src={news_arrow_left} /></div> */}
          <div className="new-main-text">
            <Slider {...settings}>
              {newData &&
                newData.data.map(item => {
                  return (
                    <div className="slide-page" key={item.id.toString()}>
                      <HomeHeaderDynamicNewsContentText
                        url={item.url}
                        title={item.title}
                        content={item.desc}
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          {/* <div className="news-arrow-right"><img src={news_arrow_right} /></div> */}
        </div>
        <div className="news-arrow-more">
          <img src={news_arrow_more} />
        </div>
      </div>
    );
  }
}
