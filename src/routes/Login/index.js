import React from "react";
import { connect } from "dva";
import LoginHeader from "./Header";
import "./index.less";
import DefaultLoginHeader from "./Main";
import LoginEmail from "./Main/loginEmail/index";
import LoginPhone from "./../Login/Main/loginPhone";
import Register from "./../Login/Main/register";
import { isInterfaceDeclaration } from "typescript";


class Login extends React.Component {
	componentDidMount(props) {
		const clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
		const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		const X1 = (clientWidth - 530)/2 + "px";
		const Y1 = ( clientHeight - 300 )/2 + "px";
		this.props.initPosition(X1,Y1);
	}
	render() {
		const { login,mouseMove,mouseDown,mouseUp,mouseLeave } = this.props;
		// const clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
		// const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		// const X1 = (clientWidth - 530)/2 + "px";
		// const Y1 = ( clientHeight - 300 )/2 + "px";
		// initPosition(X1,Y1);


		const func = ()=> {
			// initPosition(X1,Y1);
			switch ( login.type ) {

			case "loginDefault" : {
				return (
					<div >

						<div className="mask"></div>
						<div className="login" 				style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} } >
							<LoginHeader  title = "登录"
								onMouseMove = {(e)=>{mouseMove(e,login.isMouseDown,login);}}
								onMouseDown = {(e)=>{mouseDown(e,login);}}
								onMouseUp = {(e)=>{mouseUp(e);}}
								onMouseLeave = {(e)=>{mouseLeave();}}
							 />
							<DefaultLoginHeader />
						</div>
					</div>
				);
			}

			case "loginEmail" : {
				return (
					<div>
						<div className="mask"></div>
						<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} }>
							<LoginHeader title = "网易邮箱登录" 
								onMouseMove = {(e)=>{mouseMove(e,login.isMouseDown,login);}}
								onMouseDown = {(e)=>{mouseDown(e,login);}}
								onMouseUp = {(e)=>{mouseUp(e);}}
								onMouseLeave = {(e)=>{mouseLeave();}}
							/>
							<LoginEmail/>
						</div>
					</div>
				);
			}

			case "loginPhone" : {
				return (
					<div>
						<div className="mask"></div>
						<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} }>
							<LoginHeader  title = "手机登录"
								onMouseMove = {(e)=>{mouseMove(e,login.isMouseDown,login);}}
								onMouseDown = {(e)=>{mouseDown(e,login);}}
								onMouseUp = {(e)=>{mouseUp(e);}}
								onMouseLeave = {(e)=>{mouseLeave();}}
					 />
							<LoginPhone />
						</div>
					</div>
				);
			}
			case "register" : {
				return (
					<div>
						<div className="mask"></div>
						<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} } >
							<LoginHeader  title = "注册"
								onMouseMove = {(e)=>{mouseMove(e,login.isMouseDown,login);}}
								onMouseDown = {(e)=>{mouseDown(e,login);}}
								onMouseUp = {(e)=>{mouseUp(e);}}
								onMouseLeave = {(e)=>{mouseLeave();}}
							/>
							<Register />
						</div>
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
					<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} } >
						<Register />
					</div>
				)
				;
			}
			}
		};

		return ( 
			<div>
				{ func()}       
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	mouseMove(e,isMouseDown,login) {
		console.log(isMouseDown);
		if( isMouseDown ) {
			console.log("move了");
			var clientX1 = e.clientX;
			var clientY1 = e.clientY;
			// 盒子的偏移量 = 当前鼠标的位置 - 鼠标按下时相对盒子的位置
			console.log(login.moveX,"movex");
			if(login.moveX) {
				let loginX = clientX1 - Number(login.moveX.replace(/px$/,""))+"px";
				let loginY = clientY1 - Number(login.moveY.replace(/px$/,""))+"px";
				// console.log("偏移量",loginY,loginX);
				dispatch({
					type:"login/mouseMove",
					payload:{
						loginTop: loginY,
						loginLeft: loginX
					}
				});
			}
		}
		else {
			console.log("不在绘制状态");
		}
	},
	mouseDown(e,login) {
		console.log(login.loginTop);
		console.log( Number(login.loginLeft.replace(/px$/,"")) ,"5555");
		let moveX = e.clientX -  Number(login.loginLeft.replace(/px$/,""))+"px";
		let moveY = e.clientY -  Number(login.loginTop.replace(/px$/,""))+"px";
		// let moveX = e.clientX - e.target.offectLeft+"px";
		// let moveY = e.clientY - e.target.offectTop+"px";
		console.log("move11",moveX,e.offectLeft);
		dispatch({
			type:"login/mouseDown",
			payload:{
				moveX:moveX,
				moveY:moveY
			}
		});
	},
	mouseUp(e) {
		dispatch({
			type:"login/mouseUp",
		});
	},
	initPosition(X,Y) {
		dispatch({
			type:"login/initPosition",
			payload:{
				loginTop: Y,
				loginLeft: X
			}
		});
	},
	mouseLeave(e) {
		dispatch({
			type:"login/mouseUp",
		});
	},



});

export default connect(({login})=>({login}),mapDispatchToProps)(Login);
