import React from "react";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import LoginBar from "../../../../../components/loginBar";
import "./index.less";
import { connect } from "dva";

class VerifyCode extends React.Component {

	render () {
		const { login } = this.props;
		return (
			<div className = "verifycode">
				<p>您的手机号  +86 {login.RegName}</p>
				<p>为了安全，我们会给你发送短信验证码</p>
				<div>这里是输入框</div>
				<Button type = "blue" content = {"下一步"} />
                
			</div>


		);

	}


}
const mapDispatchToProps = ()=> ({



});


export default connect(({ login })=>({ login }),mapDispatchToProps)(VerifyCode);