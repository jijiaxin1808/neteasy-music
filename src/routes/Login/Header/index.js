import React from "react";
import "./index.less";
import { connect } from "dva";

class LoginHeader extends React.Component {

	
	render() {
		const { title,handleCancel } = this.props;
		return (
			<div className="loginName"
				onMouseDown = {this.props.onMouseDown}
				onMouseMove = {this.props.onMouseMove}
				onMouseUp = {this.props.onMouseUp}
				// onMouseLeave = {this.props.onMouseLeave}
				

			>
				<p>{ title }</p>
				<span onClick={()=> { handleCancel();}}
					onSelectstart={()=>{return false;}}
				>X</span>
			</div>    
		);
	}
}

const mapDispatchToProps = ( dispatch )=> ({

	handleCancel() {
		dispatch({
			type: "login/changeStatus",
			payload: {
				type:""
			} 
		});
	}
});




export default connect(({login})=>({login}),mapDispatchToProps)(LoginHeader);