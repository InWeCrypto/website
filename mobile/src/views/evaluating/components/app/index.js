import "../../../lib/css/app.less";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, Switch, Route, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import actions from "../../../../actions/evaluating/index";
import CommonTitle from "../../../components/common-title/";

import List from "../list/";
import Detail from "../detail/";

class AppComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "ICO评测",
			isDetail: false
		};
	}
	componentDidMount() {
		document.title = this.state.title;
	}
	render() {
		const state = this.state;
		let { data, match } = this.props;
		return (
			<div>
				<CommonTitle
					showReturn={true}
					isChild={true}
					title={state.title}
					hasShare={state.isDetail}
				/>
				<Switch>
					<Route exact path="/" component={List} />
					<Route path="/detail" component={Detail} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.ico.data
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getIcoAction: actions.getIcoAction(dispatch)
	};
};
export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AppComponent)
);
