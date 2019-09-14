import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import "./index.less";
import {NavLink} from "dva/router";

class LoginEmail extends React.Component {
	render() {
		return (
			<div className = "loginEmail ">   
				<Input placeholder = "请输入邮箱"  style/>
				<Input type = 'password' placeholder = "请输入密码" />
				<div className = "middleBar" > 
					<p>自动登录</p>
					<NavLink to = "/" >
						{ "无法登录？" }
					</NavLink>
				</div>
				<Button type = "blue" url="/" content = "登录" />
				<LoginBar content="<< 选择登录方式" />
			</div>
		);

	}
}
export default LoginEmail;