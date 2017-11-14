import React from 'react'

import { HashRouter as Router, NavLink, Route } from 'react-router-dom'
import echarts from 'echarts'

import { getData, switchCard } from '../../../lib/app/js/app'
import { PORTOCAL } from '../../../lib/app/js/env'

import ParticularOnlineCurrentPrice from '../particular-online-current-price/index'

// import AllInfoHomePageTextCard from '../all-info-home-page-text-card/index'
// import AllInfoHomePageTextImgCard from '../all-info-home-page-text-img-card/index'
// import AllInfoHomePageVideoCard from '../all-info-home-page-video-card/index'
// import AllInfoAll from '../all-info-all/index'
// import AllInfoText from '../all-info-text/index'
// import AllInfoTextImg from '../all-info-text-img/index'
// import AllInfoVideo from '../all-info-video/index'


import './index.less'


export default class ParticularOnlineContent extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      marketCoin: '$.1111111'
    }
  }
  componentDidMount() {
    let chart = this.refs.chart
    let myChart = echarts.init(chart)
    var upColor = '#ec0000';
    var upBorderColor = '#8A0000';
    var downColor = '#00da3c';
    var downBorderColor = '#008F28';


    // 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
    var data0 = splitData([
      ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
      ['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
    ]);


    function splitData(rawData) {
      var categoryData = [];
      var values = []
      for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
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
          result.push('-');
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
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        data: data0.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      },
      yAxis: {
        position: 'right',
        scale: true,
        splitArea: {
          show: true
        }
      },
      dataZoom: [
        {
          type: 'inside',
          start: 50,
          end: 100
        },
        {
          show: true,
          type: 'slider',
          y: '90%',
          start: 50,
          end: 100
        }
      ],
      series: [
        {
          name: '日K',
          type: 'candlestick',
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
                formatter: function (param) {
                  return param != null ? Math.round(param.value) : '';
                }
              }
            },
            data: [
              {
                name: 'XX标点',
                coord: ['2013/5/31', 2300],
                value: 2300,
                itemStyle: {
                  normal: { color: 'rgb(41,60,85)' }
                }
              },
              {
                name: 'highest value',
                type: 'max',
                valueDim: 'highest'
              },
              {
                name: 'lowest value',
                type: 'min',
                valueDim: 'lowest'
              },
              {
                name: 'average value on close',
                type: 'average',
                valueDim: 'close'
              }
            ],
            tooltip: {
              formatter: function (param) {
                return param.name + '<br>' + (param.data.coord || '');
              }
            }
          },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              [
                {
                  name: 'from lowest to highest',
                  type: 'min',
                  valueDim: 'lowest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                },
                {
                  type: 'max',
                  valueDim: 'highest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                }
              ],
              {
                name: 'min line on close',
                type: 'min',
                valueDim: 'close'
              },
              {
                name: 'max line on close',
                type: 'max',
                valueDim: 'close'
              }
            ]
          }
        },
        {
          name: 'MA5',
          type: 'line',
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: 'MA10',
          type: 'line',
          data: calculateMA(10),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: 'MA20',
          type: 'line',
          data: calculateMA(20),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },
        {
          name: 'MA30',
          type: 'line',
          data: calculateMA(30),
          smooth: true,
          lineStyle: {
            normal: { opacity: 0.5 }
          }
        },

      ]
    };

    myChart.setOption(option)

  }
  usdHandler = (e) => {
    this.setState({
      marketCoin: '$.1111111'
    })
    switchCard('act', e)
  }
  btcHandler = (e) => {
    this.setState({
      marketCoin:'$.222222'
    })
    switchCard('act', e)
  }
  ethHandler = (e) => {
    this.setState({
      marketCoin: '$.33333'
    })
    switchCard('act', e)
  }
  render() {
    let { info } = this.props
    return (
      <div className="pc-particular-online-content">
        <Router>
          <div>
            <ul className="coin-choice" onClick={this.itemClickHandler}>
              <li onClick={this.usdHandler} className="coin-item act" to="/coin-usd">美元</li>
              <li onClick={this.btcHandler} className="coin-item" to="/coin-btc">BTC</li>
              <li onClick={this.ethHandler} className="coin-item" to="/coin-eth">ETH</li>
            </ul>
           <ParticularOnlineCurrentPrice num={this.state.marketCoin}/>
        </div>
      </Router>
        <div ref="chart" className="price-chart"></div>
      </div>
    )
  }
}


