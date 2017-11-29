import React from "react";
import msg_remind from "../../../../lib/app/img/home_msg_reminding.png";
import defaultHeader from "../../../../lib/app/img/defaultheader.png";
import "./index.less";
import Sign from "../sign/";

export default class HomeHeaderLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginType: "signin",
      isShowSign: false,
      userInfo: null
    };
  }
  changeSignState(state = false, type = "signin") {
    this.setState({
      isShowSign: state,
      loginType: type
    });
  }
  changeUserInfo() {
    var info = window.localStorage.getItem("userInfo");
    this.setState({
      userInfo: JSON.parse(info)
    });
  }
  componentDidMount() {
    if (window.localStorage.getItem("userInfo")) {
      this.changeUserInfo();
    }
  }

  render() {
    let SignBox = this.state.isShowSign ? (
      <Sign
        changeState={this.changeSignState.bind(this)}
        type={this.state.loginType}
        signIn={this.changeUserInfo.bind(this)}
      />
    ) : (
      ""
    );

    return (
      <div className="pc-home-header-login">
        <div>
          {!this.state.userInfo ? (
            <span className="person-login">
              {/* onClick={this.changeSignState.bind(this, true, "signup")} */}
              <span>注册</span>/<span>
                {/* onClick={this.changeSignState.bind(this, true, "signin")} */}
                登录
              </span>
            </span>
          ) : (
            <img
              className="person-avatar"
              src={
                this.state.userInfo.img
                  ? this.state.userInfo.img
                  : defaultHeader
              }
            />
          )}
          <div className="msg">
            <img className="msg-remind" src={msg_remind} />
            <span className="msg-count">2</span>
          </div>
        </div>
        {SignBox}
      </div>
    );
  }
}
