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

export default class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      code: "",
      password: "",
      password_confirmation: "",
      setTime: 60,
      isSend: false
    };
  }
  goView(type, isOpen = true) {
    this.props.changeState(isOpen, type);
  }

  inputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }
  countDown() {
    if (this.state.setTime < 0) {
      this.setState({
        setTime: 60,
        isSend: false
      });
      return;
    }
    setTimeout(() => {
      this.setState({
        setTime: --this.state.setTime
      });
      this.countDown();
    }, 1000);
  }
  forgetClick() {
    if (this.state.phone.length == 0) {
      alert("邮箱地址不能为空");
      return;
    }
    if (this.state.code.length == 0) {
      alert("邮箱验证码不能为空");
      return;
    }
    if (this.state.password.length == 0) {
      alert("密码不能为空");
      return;
    }
    if (this.state.password_confirmation.length == 0) {
      alert("重复密码不能为空");
      return;
    }
    getData(`${PORTOCAL}/user/reset_password`, "POST", {
      phone: this.state.phone,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      code: this.state.code
    })
      .then(data => {
        if (data.code === 4000) {
          this.goView("signin");
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }
  getCode() {
    if (this.state.isSend) {
      return;
    }
    if (!this.verifyPhone(this.state.phone)) {
      alert("手机格式错误");
      return;
    }

    getData(`${PORTOCAL}/user/send_verify/` + this.state.phone)
      .then(data => {
        if (data.code === 4000) {
          alert("验证码已经发送到手机，请查看手机信息");
          this.setState({
            isSend: true
          });
          this.countDown();
        } else {
          throw new Error(data.msg);
        }
      })
      .catch(e => {
        alert(e.toString().replace("Error:", ""));
      });
  }

  verifyPhone(phone) {
    let reg = /^1[34578]\d{9}$/;
    return reg.test(phone);
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
              value={this.state.phone}
              onChange={this.inputChange.bind(this, "phone")}
              placeholder="手机号码"
              type="text"
            />
            {this.state.isSend ? (
              <span className="sign-btn sign-btngrey">
                {this.state.setTime}秒
              </span>
            ) : (
              <span className="sign-btn" onClick={this.getCode.bind(this)}>
                发送验证码
              </span>
            )}
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
              placeholder="手机验证码"
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
              placeholder="确认您的密码"
              type="password"
            />
          </div>
        </div>
        <div className="sign-item">
          <button className="sign-btn" onClick={this.forgetClick.bind(this)}>
            完成
          </button>
        </div>
        <div className="more-box">
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
