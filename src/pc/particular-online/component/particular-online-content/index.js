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
      curType: 0,
      timeIndex: 0,
      oldData: null,
      optionData: null
    };
  }
  viewEcharts(nextState) {
    if (!nextState.oldData) {
      return;
    }

    let chart = this.refs.chart;
    let myChart = echarts.init(chart);
    var upColor = "#ec0000";
    var upBorderColor = "#8A0000";
    var downColor = "#00da3c";
    var downBorderColor = "#008F28";

    // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
    var data0 = splitData(nextState.optionData ? nextState.optionData : []);

    function splitData(rawData) {
      var categoryData = [];
      var values = [];
      for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
      }
      return {
        categoryData: categoryData,
        values: values
      };
    }

    function calculateMA(dayCount) {
      var result = [];
      for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
      }
      return result;
    }

    let option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      legend: {
        data: ["日K", "MA5", "MA10", "MA20", "MA30"]
      },
      grid: {
        left: "10%",
        right: "10%",
        bottom: "15%"
      },
      xAxis: {
        type: "category",
        data: data0.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: "dataMin",
        max: "dataMax"
      },
      yAxis: {
        position: "right",
        scale: true,
        splitArea: {
          show: true
        }
      },
      dataZoom: [
        {
          type: "inside",
          start: 50,
          end: 100
        },
        {
          show: true,
          type: "slider",
          y: "90%",
          start: 50,
          end: 100
        }
      ],
      series: [
        {
          name: "日K",
          type: "candlestick",
          data: data0.values,
          itemStyle: {
            normal: {
              color: upColor,
              color0: downColor,
              borderColor: upBorderColor,
              borderColor0: downBorderColor
            }
          },
          markPoint: {
            label: {
              normal: {
                formatter: function(param) {
                  return param != null ? Math.round(param.value) : "";
                }
              }
            },
            data: [
              {
                name: "XX标点",
                coord: ["2013/5/31", 2300],
                value: 2300,
                itemStyle: {
                  normal: { color: "rgb(41,60,85)" }
                }
              },
              {
                name: "highest value",
                type: "max",
                valueDim: "highest"
              },
              {
                name: "lowest value",
                type: "min",
                valueDim: "lowest"
              },
              {
                name: "average value on close",
                type: "average",
                valueDim: "close"
              }
            ],
            tooltip: {
              formatter: function(param) {
                return param.name + "<br>" + (param.data.coord || "");
              }
            }
          },
          markLine: {
            symbol: ["none", "none"],
            data: [
              [
                {
                  name: "from lowest to highest",
                  type: "min",
                  valueDim: "lowest",
                  symbol: "circle",
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                },
                {
                  type: "max",
                  valueDim: "highest",
                  symbol: "circle",
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                }
              ],
              {
                name: "min line on close",
                type: "min",
                valueDim: "close"
              },
              {
                name: "max line on close",
                type: "max",
                valueDim: "close"
              }
            ]
          }
        },
        {
          name: "MA5",
          type: "line",
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA10",
          type: "line",
          data: calculateMA(10),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA20",
          type: "line",
          data: calculateMA(20),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: "MA30",
          type: "line",
          data: calculateMA(30),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        }
      ]
    };

    myChart.setOption(option);
  }
  setOptionData(nextState) {
    if (!nextState.oldData || !nextState.kLoaded) {
      return;
    }
    document.write(JSON.stringify(nextState.oldData));
    let oldKey = Object.keys(nextState.oldData);
    let res = [];
    nextState.oldData[oldKey[1]].map((item, index) => {
      let r = [];
      r[0] = this.setTimeString(item[0]);
      oldKey.map((item1, index1) => {
        r.push(nextState.oldData[item1][index][1]);
      });
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
      currUrl: nextProps.project_time_prices
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
        alert(e.toString().replace("Error:", ""));
      });
  }
  getKlineData(nextState) {
    let now = parseInt(new Date().getTime() / 1000);
    let start;
    let day = 24 * 60 * 80;
    switch (nextState.timeIndex) {
      case 0:
        start = now - 6 * 60 * 60;
        break;
      case 1:
        start = now - day * 1;
        break;
      case 2:
        start = now - day * 7;
        break;
      case 3:
        start = now - day * 30;
        break;
    }
    getData(
      `${PORTOCAL}/${nextState.currUrl[nextState.curType]
        .k_line_data_url}/${start}/${now}`
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
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }
  usdHandler = e => {
    this.setState({
      isLoaded: false,
      kLoaded: false,
      curType: 0
    });
    switchCard("act", e);
  };
  btcHandler = e => {
    this.setState({
      isLoaded: false,
      kLoaded: false,
      curType: 1
    });
    switchCard("act", e);
  };
  ethHandler = e => {
    this.setState({
      isLoaded: false,
      kLoaded: false,
      curType: 2
    });
    switchCard("act", e);
  };
  setTimeClass(idx) {
    return this.state.timeIndex === idx ? "time act" : "time";
  }
  timeClick(idx) {
    this.setState({
      timeIndex: idx,
      kLoaded: false
    });
  }
  render() {
    let { project_time_prices } = this.props;

    return (
      <div className="pc-particular-online-content">
        <div>
          <ul className="coin-choice">
            <li onClick={this.usdHandler} className="coin-item act">
              美元
            </li>
            <li onClick={this.btcHandler} className="coin-item">
              BTC
            </li>
            <li onClick={this.ethHandler} className="coin-item">
              ETH
            </li>
          </ul>
          <ParticularOnlineCurrentPrice
            currentPrice={this.state.currentPrice}
          />
        </div>
        <div className="filter-box">
          <span
            onClick={this.timeClick.bind(this, 0)}
            className={this.setTimeClass(0)}
          >
            6h
          </span>
          <span
            onClick={this.timeClick.bind(this, 1)}
            className={this.setTimeClass(1)}
          >
            1d
          </span>
          <span
            onClick={this.timeClick.bind(this, 2)}
            className={this.setTimeClass(2)}
          >
            7d
          </span>
          <span
            onClick={this.timeClick.bind(this, 3)}
            className={this.setTimeClass(3)}
          >
            30d
          </span>
        </div>
        <div ref="chart" className="price-chart" />
      </div>
    );
  }
}
