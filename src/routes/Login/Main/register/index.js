import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import "./index.less";
import { NavLink } from "dva/router";

class Register extends React.Component {
	render() {
		return (
			<div className = "register">   
				<p>手机号：</p>
				<Input placeholder = "请输入手机号"  style/>
				<p>密码：</p>
				<Input type = 'password' placeholder = "设置密码,不少于6位" />

				<Button type = "blue" url="/" content = "下一步" />
				<LoginBar content="<< 选择登录方式" />
			</div>
		);

	}
}
export default Register;