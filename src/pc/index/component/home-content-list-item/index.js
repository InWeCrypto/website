import React from "react";
import HomeContentListItemBack from "../home-content-list-item-back/index";
import downloadImg from "../../../lib/app/img/project_icon.png";
import Slider from "react-slick";
import { PORTOCAL } from "../../../lib/app/js/env";
import { getData } from "../../../lib/app/js/app";
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
      transY: 0,
      backData: null
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      width: nextProps.width || 0,
      height: nextProps.height || 0
    });
  }
  mouseoverHandler = e => {
    if (this.props.descType !== 5) return;
    this.setState({
      transY: 180
    });
  };
  mouseoutHandler = e => {
    if (this.props.descType !== 5) return;
    this.setState({
      transY: 0
    });
  };
  async componentDidMount() {
    let d = await getData(`${PORTOCAL}/${this.props.url}`);
    this.setState({
      backData: d.data
    });
  }
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
      name,
      background,
      descType,
      url,
      downloads,
      carousels
    } = this.props;
    let settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpend: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let link = "";
    if (descType === 5 || descType === 6) {
      link = `../../../particular-online/?${id}`;
    } else if (descType === 7 || descType === 8) {
      link = `../../../particular-fund/?${id}`;
    }
    return (
      <div
        // 禁止project卡片旋转
        // onMouseOver={this.mouseoverHandler}
        // onMouseOut={this.mouseoutHandler}
        ref="item"
        className="pc-home-content-list-item"
        data-id={id}
        style={{
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
          transform: `rotateY(${this.state.transY}deg)`,
          background: `${background}` || "#f0f"
        }}
      >
        {carousels && (
          //  <a href={downloads ? downloads[0].url : link}>
          <div className="project-slide">
            <Slider {...settings}>
              {carousels.map(item => {
                return (
                  <div key={item.id}>
                    <a className="item-link" href={item.url}>
                      <img className="slide-page" src={item.img} />
                    </a>
                    <div className="slideControl">{item.title}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
          //  </a>
        )}
        {!carousels && (
          <a href={downloads ? downloads[0].url : link}>
            <div className="list-item-content">
              {src && (
                <div
                  className="content-img"
                  style={{
                    width: `${this.state.width / 2}px`,
                    height: `${this.state.height / 2}px`
                  }}
                >
                  <img src={src} />
                </div>
              )}
              <div className="content-text">
                {/* {score && <div className="item-score">{score}</div>} */}
                <h2>{name}</h2>
                <p>{Text[descType]}</p>
                {downloads && <button className="downloadBtn">DOWNLOAD</button>}
              </div>
            </div>
            <HomeContentListItemBack
              background={background}
              url={url}
              score={score}
              name={name}
              backData={this.state.backData}
            />
          </a>
        )}
      </div>
    );
  }
}
