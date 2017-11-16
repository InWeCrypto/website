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

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: ""
    };
  }
  goView(type, isOpen = true) {
    this.props.changeState(isOpen, type);
  }
  signinClick() {
    let phone = this.state.phone;
    let password = this.state.password;
    if (!this.verifyPhone(phone)) {
      alert("手机号格式错误");
      return;
    }
    getData(`${PORTOCAL}/user/login`, "POST", {
      phone: phone,
      password: password
    })
      .then(data => {
        if (data.code === 4000) {
          window.localStorage.setItem("userInfo", JSON.stringify(data.data));
          this.goView("signin", false);
          this.props.signIn();
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }
  inputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }
  verifyPhone(phone) {
    let reg = /^1[34578]\d{9}$/;
    return reg.test(phone);
  }
  render() {
    return (
      <div className="signin">
        <div className="sign-item">
          <div className="icon-box">
            <img src={mail} />
          </div>
          <div className="input-box">
            <input
              value={this.state.phone}
              onChange={this.inputChange.bind(this, "phone")}
              className="input"
              placeholder="请输入你的手机号码"
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
              value={this.state.password}
              onChange={this.inputChange.bind(this, "password")}
              className="input"
              placeholder="密码"
              type="password"
            />
          </div>
        </div>
        <div className="sign-item">
          <button className="sign-btn" onClick={this.signinClick.bind(this)}>
            登录
          </button>
        </div>
        <div className="more-box">
          <a
            className="a right"
            href="javascript:void(0)"
            onClick={this.goView.bind(this, "signup")}
          >
            注册
          </a>
          <a
            className="a left"
            href="javascript:void(0)"
            onClick={this.goView.bind(this, "forget")}
          >
            忘记密码？
          </a>
        </div>
      </div>
    );
  }
}
