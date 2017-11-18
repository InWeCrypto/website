import React from "react";
import contactPic from "../../../lib/app/img/contact_telegram.png";
import emailPic from "../../../lib/app/img/contact_mail.png";
import locationPic from "../../../lib/app/img/contact_location.png";

import "./index.less";
export default class HomeFooterContact extends React.Component {
  render() {
    return (
      <div className="pc-home-footer-contact">
        <h4 className="contact-title">联系我们</h4>
        <div className="contact-item">
          <img className="contact-pic" src={contactPic} />
          <a href="https://t.me/inwecrypto" className="contact-text">
            https://t.me/inwecrypto
          </a>
        </div>
        <div className="contact-item">
          <img className="contact-pic" src={emailPic} />
          <a href="support@inwecrypto.com" className="contact-text">
            support@inwecrypto.com
          </a>
        </div>
        <div className="contact-item">
          <img
            className="contact-pic"
            src={locationPic}
            style={{ verticalAlign: "baseline" }}
          />
          <span className="contact-text">
            上海市杨浦区政学路77号Innospace 206 Room 206 No.77 Zhengxue Rd, Yangpu Dis,
            Shanghai
          </span>
        </div>
      </div>
    );
  }
}
