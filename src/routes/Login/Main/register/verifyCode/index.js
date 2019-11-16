import React from "react";
import Button from "../../../../../components/Button";
import "./index.less";
import { CSSTransition } from 'react-transition-group';
import { connect } from "dva";
import uuid from "uuid";

class VerifyCode extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			words: [{ item: "", id: uuid() },
			{ item: "", id: uuid() },
			{ item: "", id: uuid() },
			{ item: "", id: uuid() },
			{ item: "", id: uuid() },
			{ item: "", id: uuid() }],
			curIndex: 0,
		}
		this.inputRefs = [];
		this.hanldeWordChange = this.hanldeWordChange.bind(this);
		this.handleRef = this.handleRef.bind(this);
	}

	hanldeWordChange(e, id, words) {
		this.setState({ ...this.state, curIndex: id });
		let _words = JSON.parse(JSON.stringify(words));
		_words[id]["item"] = e.target.value;
		this.setState({
			words: _words
		}, () => {
			if (id < _words.length - 1 && _words[id]["item"] !== "") {
				this.inputRefs[id + 1].focus();
			}
		});
	}
	handleRef(el) {
		el && (this.inputRefs.length < 6) && this.inputRefs.push(el);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState === this.state) return false;
		else return true;
	}

	componentDidUpdate() {

		const { verifyVerCode } = this.props;
		const { words } = this.state;
		const { RegName,  } = this.props.login;
	
		if (!words.some(item => item.item === "")) {
			// console.log("可以发送验证码了")
			const code = words.reduce((prev, cur) => {
				return `${prev}${cur.item}`
			}, "");
			
			verifyVerCode(RegName, code, );
		}
	}
	render() {
		const { login, handleNextClick } = this.props;
		const { words, curIndex } = this.state;
		return (
			<div className="verifycode">
				<p>您的手机号  +86 {login.RegName && (login.RegName.slice(0, 3) + "****" + login.RegName.slice(7, login.RegName.length))}</p>
				<p>为了安全，我们会给你发送短信验证码</p>
				<div style={{ overflow: "hidden" }}>
					{
						words.map(({ item, id }, index) => {

							return (
								<CSSTransition
									in={item !== ""}
									key={id}
									timeout={200}
									classNames="slide"
								>
									<div className="u-word" >
										<input className="verify-input" maxlength="1" onChange={(e) => { this.hanldeWordChange(e, index, words) }} ref={(el) => this.handleRef(el)} />
									</div>
								</CSSTransition>
							)
						})
					}
				</div>
				<Button style={{marginBottom: 40}} type="blue" content={"下一步"} onClick={handleNextClick} />
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	handleNextClick() {

	},
	verifyVerCode(phone, captcha) {

		dispatch({
			type: "login/verifyVerifyCode",
			payload: {
				phone,
				captcha,
			}
		})
	}
});


export default connect(({ login }) => ({ login }), mapDispatchToProps)(VerifyCode);