import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import { NavLink } from "dva/router";
import "./index.less";
import { connect } from "dva";
import  { loginPhone as login } from "../../../../services/login";
import axios from "axios";
import qs from 'qs';

class LoginPhone extends React.Component {
	render() {
		const { changeName,changePassword,loginPhone,handleBack } = this.props;
		return (
			<div className = "loginPhone">
				<Input placeholder = "请输入手机号" type="phone" onChange = {(e)=> {changeName(e.target.value);}} />
				<Input type = 'password' placeholder = "请输入密码" onChange= {(e)=> {changePassword(e.target.value);}}  />
				<div className = "middleBar" > 
					<p>自动登录</p>
					<NavLink to = "/" >
						{ "无法登录？" }
					</NavLink>
				</div>
				<Button type = "blue" url="/" content = "登录"  onClick = {()=> { loginPhone(this.props.login); }} />
				<LoginBar content="<< 选择登录方式" onClick = {()=>{handleBack();}} />
			</div>
		);
	}
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
		// const data = {
		// 	phone: value.userName,
		// 	password: value.userPassword 
		// }
		// dispatch({
		// 	type:"login/LoginPhone",
		// 	payload: data
		// });
		const data = {
			name: "13043130139",
			password: "123iloveyouso"
		};  

		const data1 = qs.stringify(data);
		// const data1 = JSON.stringify(data);
		const res = axios.post("http://192.168.1.23:3000/login/cellphone",{data:data1});
		// const Res = login();


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