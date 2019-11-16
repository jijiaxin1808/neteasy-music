import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import "./index.less";
import { connect } from "dva";
import { message } from "antd";
import  * as loginService from "../../../../services/login";

class Register extends React.Component {

	render() {

		const { login, handleBack,changeName,changePassword,handleRegister, changeUserName } = this.props;

		return (
			<div className = "register">   
				<p>你的邮箱：</p>
				<Input placeholder = "请输入邮箱地址" onChange={(e)=> {changeName(e.target.value);}}/>
				<p>用户名</p>
				<Input placeholder="请输入用户名" onChange={(e) => {changeUserName(e.target.value);}}></Input>
				<p>密码：</p>
				<Input type = 'password' placeholder = "设置密码,不少于6位"  onChange = {(e)=> {changePassword(e.target.value);}}/>

				<Button type = "blue" url="/" content = "下一步" onClick = {()=>{ handleRegister(login); }}  />
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
	changeUserName(value) {
		dispatch({
			type: "login/changeInfo",
			payload: {
				regUserName: value	
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
	handleRegister( value ) {

		loginService.verifyEmail(value).then(res => {
			if (res.status === 200) {
				if (res.data.code === 0) {
					dispatch({
						type:"login/clear"
					});
					dispatch({
						type:"login/changeStatus",
						payload:{
							type:"verifyCode"
						}
					});
				} else if (res.data.code === 1) {
					message.error("邮箱已注册");
				} else {
					message.error("用户名不能为空");
				}
			}
		}).catch(err => {
			console.log(err);
		});
	}	
});




export default connect(({ login })=>({ login }),mapDispatchToProps)(Register);