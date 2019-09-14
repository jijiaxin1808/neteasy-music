import React from "react";
import { NavLink } from "dva/router";
import "./index.less";

class LoginBar extends React.Component {
	render() {
		const { content } = this.props;
		return (
			<div className='loginBar'>
				<NavLink to="/" >
					{ content }
				</NavLink>
			</div>
		);
	}
}

export default LoginBar;