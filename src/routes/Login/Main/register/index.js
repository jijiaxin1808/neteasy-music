import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import "./index.less";
import { connect } from 'dva';

class Register extends React.Component {
	render() {
		const { handleBack } = this.props;
		return (
			<div className = "register">   
				<p>手机号：</p>
				<Input placeholder = "请输入手机号"  style/>
				<p>密码：</p>
				<Input type = 'password' placeholder = "设置密码,不少于6位" />

				<Button type = "blue" url="/" content = "下一步" />
				<LoginBar content="<< 选择登录方式" onClick={()=>{handleBack();}}/>
			</div>
		);

	}
}

const mapDispatchToProps = ( dispatch )=> ({
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




export default connect(({ login })=>({ login }),mapDispatchToProps)(Register);