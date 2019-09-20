import React from "react";
import { connect } from "dva";
import LoginHeader from "./Header";
import "./index.less";
import DefaultLoginHeader from "./Main";
import LoginEmail from "./Main/loginEmail/index";
import LoginPhone from "./../Login/Main/loginPhone";
import Register from "./../Login/Main/register";
import VerifyCode from "./Main/register/verifyCode";


class Login extends React.Component {
	componentDidMount(props) {
		const clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
		const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		const X1 = (clientWidth - 530)/2 + "px";
		const Y1 = ( clientHeight - 300 )/2 + "px";
		this.props.initPosition(X1,Y1);
		document.onmousedown = (e) =>{
			this.props.mouseDown(e,this.props.login);
		};
		document.onmouseup = (e) => {
			this.props.mouseUp();
		};
		document.onmousemove = (e) => {
			this.props.mouseMove(e,this.props.login.isMouseDown,this.props.login);
		}; 
	}
	render() {
		const { login } = this.props;


		const func = ()=> {
			switch ( login.type ) {

			case "loginDefault" : {
				return (
					<div className = "login_background" 						
					>
						<div className="login-mask">  </div>
						<div className="login" 				style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} } >
							<LoginHeader  title = "登录"

							 />
							<DefaultLoginHeader />
							
						</div>
					</div>
				);
			}
			case "loginEmail" : {
				return (
					<div>
						<div className="login-mask"></div>
						<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} }>
							<LoginHeader title = "网易邮箱登录" 
							/>
							<LoginEmail/>
						</div>
					</div>
				);
			}
			case "verifyCode" : {
				return (
					<div>
						<div className="login-mask"></div>
						<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} }>
							<LoginHeader title = "输入验证码" 
							/>
							{/* <LoginEmail/> */}
							<VerifyCode />
						</div>
					</div>
				);
			}


			case "loginPhone" : {
				return (
					<div>
						<div className="login-mask"></div>
						<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} }>
							<LoginHeader  title = "手机登录"
					 />
							<LoginPhone />
						</div>
					</div>
				);
			}
			case "register" : {
				return (
					<div>
						<div className="login-mask"></div>
						<div className="login" style={{top:`${ this.props.login.loginTop }`,left:`${ this.props.login.loginLeft }`} } >
							<LoginHeader  title = "注册"
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
				);
				
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
		if( isMouseDown ) {
			var clientX1 = e.clientX;
			var clientY1 = e.clientY;
			// 盒子的偏移量 = 当前鼠标的位置 - 鼠标按下时相对盒子的位置
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
			// console.log("不在绘制状态");
		}
	},
	mouseDown(e,login) {
		const X = e.clientX;
		const Y = e.clientY;
		const offsetX = Number(login.loginLeft.replace(/px$/,""));
		const offsetY = Number(login.loginTop.replace(/px$/,""));
		if ((X >= offsetX ) && ( X <= offsetX+530 ) && ( Y >= offsetY ) && ( Y <= offsetY+38 )   ) {

			let moveX = X -  offsetX+"px";
			let moveY = Y -  offsetY+"px";
			dispatch({
				type:"login/mouseDown",
				payload:{
					moveX:moveX,
					moveY:moveY
				}
			});
		}
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
