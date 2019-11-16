import React, { useEffect } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import { Link } from "react-router-dom";
import "./index.less";
import { connect } from "dva";

function LoginPhone(props) {

		const { changeName,changePassword ,handleBack,loginPhone } = props;

		useEffect(() => {
			
		}, []);

		return (
			<div className = "loginPhone">
				<Input placeholder = "请输入邮箱" type="email" onChange = {(e)=> {changeName(e.target.value);}} />
				<Input type = 'password' placeholder = "请输入密码" onChange= {(e)=> {changePassword(e.target.value);}}  />
				<div className = "middleBar" > 
					<p>自动登录</p>
					<Link to = "/" >
						{ "无法登录？" }
					</Link>
				</div>
				<Button type = "blue" url="/" content = "登录"  onClick = {()=> { loginPhone(props.login); }} />
				<LoginBar content="<< 选择登录方式" onClick = {()=>{handleBack();}} />
			</div>
		);
	
}

const mapDispatchToProps = (dispatch)=> ({
	changeName( value ) {
		dispatch({
			type: "login/changeInfo",
			payload: {
				userName: value
			}
		});
	},
	changePassword( value ) {
		dispatch({
			type: "login/changeInfo",
			payload:{
				userPassword: value
			}
		});
	},
	loginPhone( value ) {
		
		dispatch({
			type:"login/loginPhoneEffect",
			payload: {
				phone: value.userName,
				password: value.userPassword 
			}
		});
	
	},
	handleBack() {
		dispatch({
			type:"login/changeStatus",
			payload:{
				type:"loginDefault"
			}	
		});
		dispatch({
			type:"login/clear"
		});
	}
	


});




export default connect(({login})=>({login}),mapDispatchToProps)(LoginPhone);