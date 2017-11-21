import React from "react";
import HomeHeaderTop from "./component/home-header-top/index";
import HomeHeaderNav from "./component/home-header-nav/index";
import { cls } from "../../lib/app/js/app";

import "./index.less";

export default class CommonHeader extends React.Component {
  render() {
    let {
      classIco,
      classPrice,
      classBrowser,
      classInfo,
      className
    } = this.props;

    return (
      <div className={cls("pc-common-header", className)}>
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
