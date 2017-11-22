import React from "react";
import $ from "jquery";
import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import ParticularTitle from "../../../common-component/particular-title/";
import ParticularOnlineContent from "../particular-online-content/";
import ParticularOnlineMarket from "../particular-online-market/";
import ParticularProjectIntroduce from "../../../common-component/particular-project-introduce/";
import ParticularNews from "../../../common-component/particular-news/";

import "./index.less";

export default class ParticularOnlineMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { totalData } = this.props;
    return (
      <div className="pc-particular-online-main">
        {totalData && (
          <div>
            <ParticularTitle name={totalData.name} id={totalData.id} />
            <ParticularOnlineContent
              project_time_prices={totalData.project_time_prices}
            />
            <ParticularOnlineMarket
              project_markets={totalData.project_markets}
            />
            <ParticularProjectIntroduce data={totalData.project_desc} />
            <ParticularNews projectId={totalData.id} />
          </div>
        )}
      </div>
    );
  }
}
