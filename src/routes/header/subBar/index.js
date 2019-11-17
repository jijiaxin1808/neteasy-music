import React from "react";
import "./index.less";
import { Menu, DropDown,  } from "antd";
import { Link, withRouter } from "react-router-dom";

//不知道为什么没有withRouter-HOC，就一直报错。

class SubBar extends React.Component {

	render() {

		const url = window.location.hash.split("/")[2]?window.location.hash.split("/")[2]:"";

		return (
			<div className = "subBar">
				
			</div>
		);
	}
}
export default withRouter(SubBar);