import React from "react";
import footLogo from "../../../lib/app/img/InCryptoWeTrust.png";

import "./index.less";
export default class HomeFooterAbout extends React.Component {
  render() {
    return (
      <div className="pc-home-footer-about">
        <h4>关于我们</h4>
        <img src={footLogo} />
        <p className="about-text">
          InWeCrypto is the first project-focused site with timely news update,
          in-depth progress report, seamlessly integrated multi-asset wallet and
          blockchain explorer.
        </p>
      </div>
    );
  }
}
