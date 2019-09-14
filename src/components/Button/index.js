import React from "react";
import "./index.less";

class Button extends React.Component {
	
	render(props) {
		const { type,content= "" } = this.props;
		
		return (
			<div className = { type ==="blue"? "Button_blue" :"Button_white" } 
				onClick={ this.props.onClick }
			>
				{content}
			</div>
		);
	}
}





export default	Button;