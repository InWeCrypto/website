import React from "react";
import HomeFooterAbout from "../home-footer-about/index";
import HomeFooterLink from "../home-footer-link/index";
import HomeFooterContact from "../home-footer-contact/index";

import "./index.less";
export default class HomeFooter extends React.Component {
  render() {
    return (
      <div className="pc-home-footer">
        <div className="pc-home-footer-content">
          <HomeFooterAbout />
          <HomeFooterContact />
          <HomeFooterLink />
        </div>
      </div>
    );
  }
}
