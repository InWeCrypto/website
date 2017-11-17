import React from "react";

import { getData } from "../../../lib/app/js/app";
import { PORTOCAL } from "../../../lib/app/js/env";

import AllInfoHomePageTextCard from "../all-info-home-page-text-card/index";

import "./index.less";

export default class AllInfoText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allInfo: null
    };
  }
  render() {
    let { allInfo } = this.state;
    return (
      <div className="pc-all-info-text">
        {allInfo &&
          allInfo.data.map(data => {
            return (
              <AllInfoHomePageTextCard
                key={data.id.toString()}
                id={data.id}
                content={data.content}
                title={data.title}
                date={data.updated_at}
                read={data.click_rate}
                reply={data.comments_count}
                collection={data.save_user}
              />
            );
          })}
      </div>
    );
  }
  async componentDidMount() {
    let data = await getData(`${PORTOCAL}/article/txt`);
    this.setState({
      allInfo: data
    });
  }
}
