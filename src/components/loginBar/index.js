import React from "react";
import { NavLink } from "dva/router";
import "./index.less";

class LoginBar extends React.Component {
	render() {
		const { content,handle } = this.props;
		return (
			<div className='loginBar' onClick = { this.props.onClick }>
				<NavLink to="/" >
					{ content }
				</NavLink>
			</div>
		);
	}
}




export default LoginBar;