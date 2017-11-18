import React from "react";
import HomeHeaderTop from "./component/home-header-top/index";
import HomeHeaderNav from "./component/home-header-nav/index";

import "./index.less";

export default class CommonHeader extends React.Component {
  render() {
    let { classIco, classPrice, classBrowser, classInfo } = this.props;

    return (
      <div className="pc-common-header">
        <HomeHeaderTop />
        <HomeHeaderNav
          classIco={classIco}
          classPrice={classPrice}
          classBrowser={classBrowser}
          classInfo={classInfo}
        />
      </div>
    );
  }
}
