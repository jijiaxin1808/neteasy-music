import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import "./index.less";
import { NavLink } from "dva/router";
import { connect } from "dva";
import qs from 'qs';
import axios from 'axios';
import { message } from 'antd';



class LoginEmail extends React.Component {
	
	render() {
		const { changeEmail,changePassword,handleEmail,handleBack } = this.props;
		return (
			<div className = "loginEmail ">   
				<Input placeholder = "请输入邮箱"  onChange = {(e)=> {changeEmail(e.target.value);}}   />
				<Input type = 'password' placeholder = "请输入密码" onChange = {(e)=> {changePassword(e.target.value);}} />
				<div className = "middleBar" > 
					<p>自动登录</p>
					<NavLink to = "/" >
						{ "无法登录？" }
					</NavLink>
				</div>
				<Button type = "blue" url="/" content = "登录" onClick = {()=> { handleEmail(this.props.login) }}/>
				<LoginBar content="<< 选择登录方式" onClick = { ()=> {handleBack();}  } />
			</div>
		);
	}
}
const mapDispatchToProps = ( dispatch )=> ({
	changeEmail( value ) {
		dispatch({
			type: "login/changeInfo",
			payload: {
				userEmail: value
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
	handleEmail( value ) {
		const data = {
			email: value.userEmail,
			password: value.userPassword 
		}
		const data1 = qs.stringify(data);
		// dispatch({
		// 	type:"login/LoginPhone",
		// 	payload: data
		// });
		axios.post("http://localhost:3000/login",data1).then((res)=> {
			if(res.data.code === 200) {
				message.success("登录成功");
				dispatch({
					type:"login/changeStatus",
					payload: {
						type:""
					}
				});
			}
			else {
				message.error(res.data.message);
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


})


export default connect(({login})=>({login}),mapDispatchToProps)(LoginEmail);