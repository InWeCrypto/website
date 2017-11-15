import "./sign.less";

import React, { Component } from "react";
import ReactDom from "react-dom";

import user from "../../../../lib/app/img/signuser.png";
import mail from "../../../../lib/app/img/signmail1.png";
import code from "../../../../lib/app/img/signlock1.png";
import password from "../../../../lib/app/img/signlock.png";
import password2 from "../../../../lib/app/img/signlock2.png";

export default class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      code: "",
      password: "",
      password_confirmation: ""
    };
  }
  goView(type, isOpen) {
    this.props.changeState(isOpen, type);
  }
  inputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }
  render() {
    return (
      <div className="sign">
        <div className="sign-item code">
          <div className="icon-box">
            <img src={mail} />
          </div>
          <div className="input-box">
            <input
              className="input"
              value={this.state.email}
              onChange={this.inputChange.bind(this, "email")}
              placeholder="请输入你的邮箱"
              type="text"
            />
            <span className="sign-btn">发送验证码</span>
          </div>
        </div>
        <div className="sign-item">
          <div className="icon-box">
            <img src={code} />
          </div>
          <div className="input-box">
            <input
              className="input"
              value={this.state.code}
              onChange={this.inputChange.bind(this, "code")}
              placeholder="请输入你的邮箱验证码"
              type="text"
            />
          </div>
        </div>
        <div className="sign-item">
          <div className="icon-box">
            <img src={password} />
          </div>
          <div className="input-box">
            <input
              className="input"
              value={this.state.password}
              onChange={this.inputChange.bind(this, "password")}
              placeholder="输入您的新密码"
              type="password"
            />
          </div>
        </div>
        <div className="sign-item">
          <div className="icon-box">
            <img src={password2} />
          </div>
          <div className="input-box">
            <input
              className="input"
              value={this.state.password_confirmation}
              onChange={this.inputChange.bind(this, "password_confirmation")}
              placeholder="再次确认您的新密码"
              type="password"
            />
          </div>
        </div>
        <div className="sign-item">
          <button className="sign-btn">完成</button>
        </div>
        <div className="sign-item tl">
          <span
            className="return"
            onClick={this.goView.bind(this, "signin", true)}
          >
            去登录
          </span>
        </div>
      </div>
    );
  }
}
