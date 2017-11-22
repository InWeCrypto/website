import React from "react";

import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import echarts from "echarts";

import { getData, switchCard } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import ParticularOnlineCurrentPrice from "../particular-online-current-price/index";

// import AllInfoHomePageTextCard from '../all-info-home-page-text-card/index'
// import AllInfoHomePageTextImgCard from '../all-info-home-page-text-img-card/index'
// import AllInfoHomePageVideoCard from '../all-info-home-page-video-card/index'
// import AllInfoAll from '../all-info-all/index'
// import AllInfoText from '../all-info-text/index'
// import AllInfoTextImg from '../all-info-text-img/index'
// import AllInfoVideo from '../all-info-video/index'

import "./index.less";
export default class ParticularOnlineContent extends React.Component {
  componentDidMount() {}

  constructor(props) {
    super(props);
    this.state = {
      isFirst: true,
      currUrl: props.project_time_prices ? props.project_time_prices : null,
      currentPrice: null,
      isLoaded: false,
      kLoaded: false,
      curType: null,
      timeIndex: 0,
      oldData: null,
      optionData: null
    };
  }
  viewEcharts(nextState) {
    if (!nextState.optionData) {
      return;
    }
    let chart = this.refs.chart;
    let myChart = echarts.init(chart);
    var upColor = "rgba(236, 0, 0, 0.5)";
    var upBorderColor = "#8A0000";
    var downColor = "rgba(0,218,60,0.5)";
    var downBorderColor = "#008F28";

    var data = splitData(
      nextState.optionData
        ? JSON.parse(JSON.stringify(nextState.optionData))
        : []
    );

    // document.write(JSON.stringify(data));
    function splitData(rawData) {
      var categoryData = [];
      var values = [];
      var volumes = [];
      for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
        volumes.push([
          i,
          rawData[i][4],
          rawData[i][0] > rawData[i][1] ? 1 : -1
        ]);
      }

      return {
        categoryData: categoryData,
        values: values,
        volumes: volumes
      };
    }

    function calculateMA(dayCount, data) {
      var result = [];
      for (var i = 0, len = data.values.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += data.values[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(3));
      }
      return result;
    }

    var option = {
      backgroundColor: "#fff",
      animation: false,
      legend: {
        bottom: 10,
        left: "center",
        data: ["Dow-Jones index"]
      },
      barWidth: 4,
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        },
        backgroundColor: "rgba(245, 245, 245, 0.8)",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        textStyle: {
          color: "#000"
        },
        position: function(pos, params, el, elRect, size) {
          var obj = { top: 10 };
          obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
          return obj;
        },
        extraCssText: "width: 170px"
      },
      axisPointer: {
        link: { xAxisIndex: "all" },
        label: {
          backgroundColor: "#777"
        }
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: false
          },
          brush: {
            type: ["lineX", "clear"]
          }
        }
      },
      brush: {
        xAxisIndex: "all",
        brushLink: "all",
        outOfBrush: {
          colorAlpha: 0.1
        }
      },
      visualMap: {
        show: false,
        seriesIndex: 5,
        dimension: 2,
        pieces: [
          {
            value: 1,
            color: downColor
          },
          {
            value: -1,
            color: upColor
          }
        ]
      },
      grid: [
        {
          left: "10%",
          right: "8%",
          height: "45%"
        },
        {
          left: "10%",
          right: "8%",
          top: "68%",
          height: "16%"
        }
      ],
      xAxis: [
        {
          type: "category",
          data: data.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          splitNumber: 20,
          min: "dataMin",
          max: "dataMax",
          axisPointer: {
            z: 100
          }
        },
        {
          type: "category",
          gridIndex: 1,
          data: data.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          splitNumber: 20,
          min: "dataMin",
          max: "dataMax",
          axisPointer: {
            label: {
              formatter: function(params) {
                var seriesValue = (params.seriesData[0] || {}).value;
                return (
                  params.value +
                  (seriesValue != null
                    ? "\n" + echarts.format.addCommas(seriesValue)
                    : "")
                );
              }
            }
          }
        }
      ],
      yAxis: [
        {
          scale: true,
          splitArea: {
            show: true
          }
        },
        {
          scale: true,
          gridIndex: 1,
          splitNumber: 2,
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false }
        }
      ],
      dataZoom: [
        {
          type: "inside",
          xAxisIndex: [0, 1],
          start: 0,
          end: 100
        },
        {
          show: true,
          xAxisIndex: [0, 1],
          type: "slider",
          top: "85%",
          start: 0,
          end: 100
        }
      ],
      series: [
        {
          name: "Dow-Jones index",
          type: "candlestick",
          data: data.values,
          itemStyle: {
            normal: {
              color: upColor,
              color0: downColor,
              borderColor: null,
              borderColor0: null
            }
          },
          tooltip: {
            formatter: function(param) {
              param = param[0];
              return [
                "Date: " + param.name + '<hr size=1 style="margin: 3px 0">',
                "Open: " + param.data[0] + "<br/>",
                "Close: " + param.data[1] + "<br/>",
                "Lowest: " + param.data[2] + "<br/>",
                "Highest: " + param.data[3] + "<br/>"
              ].join("");
            }
          }
        },
        {
          name: "MA5",
          type: "line",
          data: calculateMA(5, data),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA10",
          type: "line",
          data: calculateMA(10, data),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA20",
          type: "line",
          data: calculateMA(20, data),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA30",
          type: "line",
          data: calculateMA(30, data),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "Volume",
          type: "bar",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: data.volumes
        }
      ]
    };

    myChart.setOption(option);
  }
  setOptionData(nextState) {
    if (!nextState.oldData || !nextState.kLoaded) {
      return;
    }
    let res = [];

    nextState.oldData.map(item => {
      let r = [];
      r.push(this.setTimeString(item["time"]));
      r.push(item["opened_price"]);
      r.push(item["closed_price"]);
      r.push(item["min_price"]);
      r.push(item["max_price"]);
      r.push(item["volume"]);
      res.push(r);
    });

    this.setState({
      optionData: JSON.parse(JSON.stringify(res)),
      kLoaded: false
    });
  }
  setTimeString(time) {
    let t = new Date(time);
    let year = t.getFullYear();
    let month = t.getMonth() + 1;
    let day = t.getDate();
    let hours = t.getHours();
    let min = t.getMinutes();
    return `${year}/${month}/${day} ${hours}:${min}`;
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      currUrl: nextProps.project_time_prices,
      curType: 0
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isFirst) {
      this.getCurPrice(nextState);
      this.getKlineData(nextState);
      this.setState({
        isFirst: false
      });
    }
    if (
      nextState.currUrl &&
      nextState.currUrl[nextState.curType] &&
      nextState.currUrl[nextState.curType].current_url &&
      !nextState.isLoaded &&
      nextState.curType != this.state.curType
    ) {
      this.getCurPrice(nextState);
    }
    if (
      nextState.currUrl &&
      nextState.currUrl[nextState.curType] &&
      nextState.currUrl[nextState.curType].current_url &&
      !nextState.kLoaded &&
      (nextState.curType != this.state.curType ||
        nextState.timeIndex != this.state.timeIndex)
    ) {
      this.getKlineData(nextState);
    }

    if (nextState.kLoaded) {
      this.setOptionData(nextState);
      this.viewEcharts(nextState);
    }
  }
  getUrl = (data, id) => {
    let url = "";
    if (!data) return;
    data.map((item, i) => {
      if (item.id == id) {
        url = item.current_url;
      }
    });
    return url;
  };
  getCurPrice(nextState) {
    if (!nextState.currUrl || !nextState.currUrl[nextState.curType]) {
      return;
    }
    getData(`${PORTOCAL}/${nextState.currUrl[nextState.curType].current_url}`)
      .then(data => {
        if (data.code === 4000) {
          this.setState({
            isLoaded: true,
            currentPrice: data.data
          });
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        //alert(e.toString().replace("Error:", ""));
      });
  }
  getKlineData(nextState) {
    if (!nextState.currUrl || !nextState.currUrl[nextState.curType]) {
      return;
    }
    let now = parseInt(new Date().getTime() / 1000);
    let start;
    let day = 24 * 60 * 60;
    switch (nextState.timeIndex) {
      case 0:
        start = now - 5 * 60 * 1000;
        break;
      case 1:
        start = now - 6 * 60 * 60 * 1000;
        break;
      case 2:
        start = now - day * 1 * 1000;
        break;
      case 3:
        start = now - day * 7 * 1000;
        break;
      case 4:
        start = now - day * 30 * 1000;
        break;
    }
    start = start <= 0 ? 0 : start;
    start = start.length < 10 ? 0 : start;
    getData(
      `${PORTOCAL}/${nextState.currUrl[nextState.curType].k_line_data_url}/${
        start
      }/${now}/10`
    )
      .then(data => {
        if (data.code === 4000) {
          this.setState({
            kLoaded: true,
            oldData: data.data
          });
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {});
  }
  setTimeClass(idx) {
    return this.state.timeIndex === idx ? "time act" : "time";
  }
  timeClick(idx) {
    this.setState({
      timeIndex: idx,
      kLoaded: false
    });
  }
  menuClick(idx) {
    this.setState({
      isLoaded: false,
      kLoaded: false,
      curType: idx
    });
  }
  showMenuClass(idx) {
    return this.state.curType === idx ? "coin-item act" : "coin-item";
  }
  render() {
    let { project_time_prices } = this.props;

    return (
      <div className="pc-particular-online-content">
        <div>
          <ul className="coin-choice">
            {this.state.currUrl &&
              this.state.currUrl.length > 0 &&
              this.state.currUrl.map((item, index) => {
                return (
                  <li
                    onClick={this.menuClick.bind(this, index)}
                    className={this.showMenuClass(index)}
                    key={index}
                  >
                    {item.name}
                  </li>
                );
              })}
          </ul>
          <ParticularOnlineCurrentPrice
            currentPrice={this.state.currentPrice}
          />
        </div>
        {this.state.currUrl &&
          this.state.currUrl.length != 0 && (
            <div className="filter-box">
              <span
                onClick={this.timeClick.bind(this, 0)}
                className={this.setTimeClass(0)}
              >
                5m
              </span>
              <span
                onClick={this.timeClick.bind(this, 1)}
                className={this.setTimeClass(1)}
              >
                6h
              </span>
              <span
                onClick={this.timeClick.bind(this, 2)}
                className={this.setTimeClass(2)}
              >
                1d
              </span>
              <span
                onClick={this.timeClick.bind(this, 3)}
                className={this.setTimeClass(3)}
              >
                7d
              </span>
              <span
                onClick={this.timeClick.bind(this, 4)}
                className={this.setTimeClass(4)}
              >
                30d
              </span>
            </div>
          )}
        {this.state.optionData && <div ref="chart" className="price-chart" />}
      </div>
    );
  }
}
