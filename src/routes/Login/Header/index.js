import React from "react";
import "./index.less";
import { connect } from "dva";

class LoginHeader extends React.Component {
	
	render() {
		const { Title,login,mouseDown,mouseMove,mouseUp,handleCancel } = this.props;
		let X = login.loginTop;
		let Y = login.loginLeft;
		return (
			<div className="loginName"
				onMouseMove={ (e)=> {mouseMove(e,login.isMouseDown);}}
				onMouseDown = { (e)=> {mouseDown(e);} }
				onMouseUp = { (e)=> {mouseUp(e);} }
				style={{top:`${X}`,left:`${Y}`}} 
			>
				<p>{ Title }</p>
				<span onClick={()=> { handleCancel();}}>X</span>
			</div>    
		);
	}
}

const mapDispatchToProps = ( dispatch )=> ({
	mouseMove(e,isMouseDown) {
		console.log(isMouseDown);
		if( isMouseDown ) {
			console.log("move了");
			const X = e.clientX-250+"px";
			const Y = e.clientY-250+"px";
			dispatch({
				type:"login/mouseMove",
				payload:{
					loginTop: Y,
					loginLeft: X
				}
			});
		}
		else {

		}
	},
	mouseDown(e) {
		dispatch({
			type:"login/mouseDown"
		});
	},
	mouseUp(e) {
		dispatch({
			type:"login/mouseUp",
		});
	},
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