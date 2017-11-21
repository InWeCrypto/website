import "./index.less";
import React, { Component } from "react";

import { getData, getQuery } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";
import echarts from "echarts";

export default class Strcture extends Component {
  componentDidMount() {
    let strcture = this.refs.strcture;
    let myChart = echarts.init(strcture);
    let strctureData = this.props.ico_assess_structure;
    let value = [];
    let theColor = [];
    strctureData.map(item => {
      value.push({ value: item.percentage });
      theColor.push(item.color_value);
    });

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
          data: value,
          color: theColor,
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
    let { ico_assess_structure } = this.props;

    return (
      <div className="strcture">
        <h2>结构</h2>
        <div className="strcture-chart" ref="strcture" />
        <div className="strcture-detail">
          {ico_assess_structure &&
            ico_assess_structure.map(item => {
              return (
                <p>{`${item.color_name} : ${item.percentage}, ${item.desc}`}</p>
              );
            })}
        </div>
      </div>
    );
  }
}
