import React from "react";
import "./index.less";

class Input extends React.Component {
	render() {
		const { placeholder,type="" } = this.props;
		return (
			<input  className="input" placeholder={ placeholder } type={ type }/>
		);
	}
}
export default Input;