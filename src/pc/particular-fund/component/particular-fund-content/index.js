import React from "react";
import { getData, switchCard } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";
import ParticularFundCurrent from "../particular-fund-current/index";
import ParticularFundDetail from "../particular-fund-detail/index";

import "./index.less";

export default class ParticularFundContent extends React.Component {
  render() {
    let { contentData } = this.props;
    return (
      <div className="pc-particular-fund-content">
        <ParticularFundCurrent
          currentData={contentData && contentData.data.project_detail}
        />
        <ParticularFundDetail
          detailData={contentData && contentData.data.ico_detail}
        />
      </div>
    );
  }
}
