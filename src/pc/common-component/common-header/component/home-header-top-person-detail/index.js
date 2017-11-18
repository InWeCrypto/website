import React from "react";
import "./index.less";
import home_top_ins from "../../../../lib/app/img/contact_telegram.png";
import home_top_mail from "../../../../lib/app/img/contact_mail.png";

export default class HomeHeaderTopPersonDetail extends React.Component {
  render() {
    return (
      <div className="pc-home-header-top-person-detail">
        <a href="https://t.me/inwecrypto" className="detail-icon">
          <img src={home_top_ins} />
        </a>
        <span className="split-line" />
        <a href="support@inwecrypto.com" className="detail-icon">
          <img src={home_top_mail} />
        </a>
      </div>
    );
  }
}
