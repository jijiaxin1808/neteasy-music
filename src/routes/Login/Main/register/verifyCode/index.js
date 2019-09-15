import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import LoginBar from "../../../../components/loginBar";
import "./index.less";

class VerifyCode extends React.Component {
    
	render () {
		const { login } = this.props;
		return (
			<div>
				<p>您的手机号  +86 {login.RegName}</p>


                <span > 重新发送</span>
				<Button type = "blue" content = {"下一步"} />
                
			</div>


		);

	}


}


export default connect(({ login })=>({ login }),mapDispatchToProps)(VerifyCode);