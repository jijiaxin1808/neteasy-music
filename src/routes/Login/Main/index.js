import React from "react";
import { Link } from "dva/router";
import Button from "../../../components/Button";
import { connect } from "dva";

const Data = [{
	imgUrl:"url('../../assets/logo.png') -150px -670px no-repeat",
	name:"微信登录"
},
{
	imgUrl:"",
	name:"qq登录"
},
{
	imgUrl:"",
	name:"微博登录"
},
{
	imgUrl:"",
	name:"网易邮箱登录"
}
];

class DefaultLogin extends React.Component {
	render() {
		const { handlePhone,handleRegister}  = this.props;
		return (
			<div className="loginMainContain">
				<div className="loginLeftContain">
					<div className="loginLeftContainImg ">
					</div >
					<Button   type = "blue"  content = "手机号登录"  onClick = {()=>{handlePhone();}}  />
					<Button type = "white" content = "注册" onClick = {()=>{handleRegister();}}  />
				</div>
				<div className="loginRightContain">
					{
						Data.map((item,index)=> {
							return (
								<div className="LoginForm" key = { index }>
									<div className = "LoginFormSpan"></div>
									<Link to="/" > 
										{item.name}
									</Link>
								</div>
							);
						})
					}
				</div>
			</div>  
		);
	}
}

const mapDispatchToProps = ( dispatch )=> ({
	handlePhone() {
		dispatch({
			type:"login/changeStatus",
			payload: {
				type:"loginPhone"
			}
		});
	},
	handleRegister() {
		dispatch({
			type:"login/changeStatus",
			payload: {
				type:"register"
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
	}
});



export default connect(({login})=>({login}),mapDispatchToProps)( DefaultLogin );