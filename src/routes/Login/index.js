import React from "react";
import { connect } from "dva";
import LoginHeader from "./Header";
import "./index.less";
import DefaultLoginHeader from "./Main";
import LoginEmail from "./Main/loginEmail/index";
import LoginPhone from "./../Login/Main/loginPhone";
import Register from "./../Login/Main/register";


class Login extends React.Component {
	render() {
		const { login,mouseMove,mouseDown,mouseUp } = this.props;
		const func = ()=> {
			switch ( login.type ) {

			case "loginDefault" : {
				return (
					<div className="login">
						<LoginHeader  
							onMouseMove={ (e)=> {mouseMove(e,login.isMouseDown);}}
							onMouseDown = { (e)=> {mouseDown(e);} }
							onMouseUp = { (e)=> {mouseUp(e);} }
							style={{top:`${X}`,left:`${Y}`}} />
						<DefaultLoginHeader />
					</div>
				);
			}

			case "loginEmail" : {
				return (
					<div className="login">
						<LoginHeader  
							onMouseMove={ (e)=> {mouseMove(e,login.isMouseDown);}}
							onMouseDown = { (e)=> {mouseDown(e);} }
							onMouseUp = { (e)=> {mouseUp(e);} }
							style={{top:`${X}`,left:`${Y}`}} />
						<LoginEmail/>
					</div>
				);
			}

			case "loginPhone" : {
				return (
					<div className="login">
						<LoginHeader  
							onMouseMove={ (e)=> {mouseMove(e,login.isMouseDown);}}
							onMouseDown = { (e)=> {mouseDown(e);} }
							onMouseUp = { (e)=> {mouseUp(e);} }
							style={{top:`${X}`,left:`${Y}`}} />
						<LoginPhone />
					</div>
				);
			}
			case "Register" : {
				return (
					<div className="login">
						<LoginHeader  
							onMouseMove={ (e)=> {mouseMove(e,login.isMouseDown);}}
							onMouseDown = { (e)=> {mouseDown(e);} }
							onMouseUp = { (e)=> {mouseUp(e);} }
							style={{top:`${X}`,left:`${Y}`}} />
						<Register />
					</div>
				);
			}

			case "" : {
				return (
					<div style = {{ display: "none" }} >
						{"aaaa"}
					</div>
				);
			}

			default : {
				return (
					<div className="login">
						<LoginHeader  style = {{display : "none"}} 
							onMouseMove={ (e)=> {mouseMove(e,login.isMouseDown);}}
							onMouseDown = { (e)=> {mouseDown(e);} }
							onMouseUp = { (e)=> {mouseUp(e);} }
						/>
						<Register />
					</div>
				)
				;
			}
			}
		};
		const X = login.loginTop;
		const Y = login.loginLeft;
		console.log(X,Y);
		return ( 
			<div>
				{ func()}       
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
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
	}





});

export default connect(({login})=>({login}),mapDispatchToProps)(Login);
