import "./sign.less";

import React, { Component } from "react";
import ReactDom from "react-dom";
import { getData } from "../../../../lib/app/js/app";
import { PORTOCAL } from "../../../../lib/app/js/env";

import user from "../../../../lib/app/img/signuser.png";
import mail from "../../../../lib/app/img/signmail1.png";
import code from "../../../../lib/app/img/signlock1.png";
import password from "../../../../lib/app/img/signlock.png";
import password2 from "../../../../lib/app/img/signlock2.png";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      code: "",
      password: "",
      password_confirmation: ""
    };
  }
  goView(type) {
    this.props.changeState(true, type);
  }
  inputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }
  getCode() {
    if (!this.verifyEmail(this.state.email)) {
      alert("邮箱格式错误");
      return;
    }
    alert("验证码已经发送到邮箱，请去邮箱查看");
    getData(
      `${PORTOCAL}/user/send_verify/` + this.state.email
    ).then(data => {});
  }
  regeditClick() {
    if (!this.verifyEmail(this.state.email)) {
      alert("邮箱格式错误");
      return;
    }
    if (this.state.password !== this.state.password_confirmation) {
      alert("两次输入密码不一致");
      return;
    }
    getData(`${PORTOCAL}/user/register`, "POST", {
      email: this.state.email,
      name: this.state.name,
      code: this.state.code,
      password_confirmation: this.state.password_confirmation,
      password: this.state.password
    }).then(data => {
      console.log(data);
    });
  }
  verifyEmail(email) {
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return reg.test(email);
  }
  render() {
    return (
      <div className="signup">
        <div className="sign-item">
          <div className="icon-box">
            <img src={user} />
          </div>
          <div className="input-box">
            <input
              className="input"
              value={this.state.name}
              onChange={this.inputChange.bind(this, "name")}
              placeholder="昵称"
              type="text"
            />
          </div>
        </div>
        <div className="sign-item code">
          <div className="icon-box">
            <img src={code} />
          </div>
          <div className="input-box">
            <input
              className="input"
              value={this.state.email}
              onChange={this.inputChange.bind(this, "email")}
              placeholder="请输入你的邮箱"
              type="text"
            />
            <span className="sign-btn" onClick={this.getCode.bind(this)}>
              发送验证码
            </span>
          </div>
        </div>
        <div className="sign-item">
          <div className="icon-box">
            <img src={mail} />
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
              placeholder="设置您的密码"
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
              placeholder="再次确认您的密码"
              type="password"
            />
          </div>
        </div>
        <div className="sign-item">
          <button className="sign-btn" onClick={this.regeditClick.bind(this)}>
            注册
          </button>
        </div>
        <div className="sign-item tl">
          <span className="return" onClick={this.goView.bind(this, "signin")}>
            去登录
          </span>
        </div>
      </div>
    );
  }
}
