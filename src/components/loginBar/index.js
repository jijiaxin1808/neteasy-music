import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

class LoginBar extends React.Component {
	render() {
		const { content} = this.props;
		return (
			<div className='loginBar' onClick = { this.props.onClick }>
				<Link to="/" >
					{ content }
				</Link>
			</div>
		);
	}
}




export default LoginBar;