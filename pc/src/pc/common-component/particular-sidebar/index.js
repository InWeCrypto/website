import React, { Component } from "react";
import { switchCard } from "../../lib/app/js/app";
import "./index.less";
import $ from "jquery";

export default class ParticularSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.totalData ? props.totalData : null
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.totalData
    });
  }
  upToHtml(str, ref) {
    setTimeout(() => {
      let dom = this.refs[ref];
      $(dom).html(str);
    }, 100);
  }
  render() {
    let data = this.state.data;
    return (
      <div className="pc-particular-sidebar">
        {data &&
          data.project_explorers &&
          data.project_explorers.length > 0 && (
            <div className="sidebar-explore">
              <h2 className="sidebar-title">Explorer</h2>
              <div className="explore-content">
                {data.project_explorers &&
                  data.project_explorers.map((item, index) => {
                    return (
                      <p key={index}>
                        <a href={item.url}>{item.name}</a>
                      </p>
                    );
                  })}
              </div>
            </div>
          )}
        {data &&
          data.project_wallets &&
          data.project_wallets.length > 0 && (
            <div className="sidebar-wallet">
              <h2 className="sidebar-title">Wallet</h2>
              <div className="wallet-content">
                {data.project_wallets &&
                  data.project_wallets.map((item, index) => {
                    return (
                      <a
                        href={item.url}
                        className="sidebar-btn"
                        style={{ marginRight: "30px" }}
                        key={index}
                      >
                        {item.name}
                      </a>
                    );
                  })}
              </div>
            </div>
          )}
        {data &&
          data.desc &&
          data.desc.length > 0 && (
            <div className="sidebar-twitter">
              <h2 className="sidebar-title">Twitter</h2>
              <div className="twitter-content" ref="desc">
                {this.upToHtml(data.desc, "desc")}
              </div>
            </div>
          )}

        {data &&
          data.project_medias &&
          data.project_medias.length > 0 && (
            <div className="sidebar-more-info">
              <h2 className="sidebar-title">更多资讯</h2>
              <div className="more-info-content">
                {data.project_medias &&
                  data.project_medias.map((item, index) => {
                    return (
                      <a className="a" href={item.url} key={index}>
                        <img className="img" src={item.img} />
                      </a>
                    );
                  })}
              </div>
            </div>
          )}
      </div>
    );
  }
}
