import React from "react";
import Button from "../../../../../components/Button";
import "./index.less";
import { connect } from "dva";

class VerifyCode extends React.Component {

	render () {
		const { login } = this.props;
		return (
			<div className = "verifycode">
				<p>您的手机号  +86 {login.RegName}</p>
				<p>为了安全，我们会给你发送短信验证码</p>
				<div>
					<input className = "verify-input"  maxlength="1"/>
					<input className = "verify-input" maxlength="1"/>
					<input className = "verify-input" maxlength="1"/>
					<input className = "verify-input" maxlength="1"/>
				</div>
				<Button type = "blue" content = {"下一步"} />
                
			</div>
		);

	}
}
const mapDispatchToProps = ()=> ({
});


export default connect(({ login })=>({ login }),mapDispatchToProps)(VerifyCode);