import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import "./index.less";
import { connect } from 'dva';
import Axios from "axios";

class Register extends React.Component {
	render() {
		const { handleBack,changeName,changePassword } = this.props;
		return (
			<div className = "register">   
				<p>手机号：</p>
				<Input placeholder = "请输入手机号"  onChange = {(e)=> {changeName(e.target.value);}}/>
				<p>密码：</p>
				<Input type = 'password' placeholder = "设置密码,不少于6位"  onChange = {(e)=> {changePassword(e.target.value);}}/>

				<Button type = "blue" url="/" content = "下一步" handel />
				<LoginBar content="<< 选择登录方式" onClick={()=>{handleBack();}}/>
			</div>
		);
	}
}

const mapDispatchToProps = ( dispatch )=> ({
	changeName( value ) {
		dispatch({
			type: "login/changeInfo",
			payload: {
				RegName: value
			}
		});
	},
	changePassword( value ) {
		dispatch({
			type: "login/changeInfo",
			payload:{
				regPassword: value
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
	},
	handleRegister() {
		Axios.post("http://localhost:3000/login/captcha",)
	}


})




export default connect(({ login })=>({ login }),mapDispatchToProps)(Register);