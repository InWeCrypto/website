import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";
import echarts from "echarts";

export default class Strcture extends Component {
  componentDidMount() {
    let strcture = this.refs.strcture;
    let myChart = echarts.init(strcture);

    let option = {
      title: {
        // text: "某站点用户访问来源",
        // subtext: "纯属虚构",
        //x: "left"
      },
      // tooltip: {
      //   trigger: "item",
      //   formatter: "{a} <br/>{b} : {c} ({d}%)"
      // },
      // legend: {
      //   orient: "vertical",
      //   left: "left",
      //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      // },
      series: [
        {
          //name: "访问来源",
          type: "pie",
          radius: "85%",
          center: ["30%", "50%"],
          data: [
            { value: 335 },
            { value: 310 },
            { value: 234 },
            { value: 135 },
            { value: 1548 }
          ],
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
    myChart.setOption(option);
  }
  render() {
    // let { intro } = this.props;

    return (
      <div className="strcture">
        <h2>结构</h2>
        <div className="strcture-chart" ref="strcture" />
        <div className="strcture-detail">
          <p>粉色：50%，5亿用于公开发行</p>
        </div>
      </div>
    );
  }
}
