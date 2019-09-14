import { Link } from "react-router-dom";
import { Data } from "../../../assets/TopData";
import React from "react";
import "./index.less";
import { connect } from "dva";

class TopBar extends React.Component {
	render() {
		const { handleEmail,handlePhone } = this.props;
		return (
			<div className="topBar">
				{
					Data.map(( item,index )=> {
						return (
							<div className="topBarItem" key = { index }  >
								<Link to={item.linkTo} >
									{item.name}
								</Link>
							</div>
						);
					})
				}
				<div className="topBarSearch">
					{/* <span className="searchIcon">
                    </span> */}
					<input />
				</div>
				<div className = "topBar_creater" >
					<Link to="/creater">
						{ "创作者中心" }
					</Link>
				</div>	
				<div className = "topBar_login">
					<span > { "登录" } </span>
					<div>
						<span onClick={()=> {handlePhone()}} > 
							手机号登录
						</span>
						<span onClick={()=> {handleEmail()}}>
							邮箱登录 
						</span>
					</div>
				</div> 	
			</div>
		);
	}
}
const mapToDispatchToProps = (dispatch)=> ({
	handlePhone() {
		dispatch({
			type: "login/changeStatus",
			payload: {
				type: "loginPhone"
			}
		});
	},
	handleEmail() {
		dispatch({
			type: "login/changeStatus",
			payload: {
				type: "loginEmail"
			}
		});
	}


});




export default connect(({login})=> ({login}),mapToDispatchToProps)(TopBar);