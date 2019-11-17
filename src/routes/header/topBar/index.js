import { Link } from "react-router-dom";
import React from "react";
import "./index.less";
import { connect } from "dva";
import { message, Button } from "antd";
import "../../../assets/iconfont.css";

class TopBar extends React.Component {

	render() {

		const { handleEmail,handlePhone } = this.props;

		return (
			<div className="topBar">
				<div>
					<ul className = "subBar-ul">
						<li className = "topBarItem">
						  <i className="iconfont">&#xe689;</i>
							<Link to = "/discover/recommand"><span>推荐</span></Link>
						</li>
						<li className = "topBarItem">
							<Link to = "/discover/toplist"><span>排行榜</span></Link>
						</li>
						<li className = "topBarItem">
							<Link to = "/discover/playlist"><span>歌单</span></Link>
						</li>
						{/* <li className = "topBarItem">
							<Link to = "/discover/djradio"><span>主播电台</span></Link>
						</li> */}
						<li className = "topBarItem">
							<Link to = "/discover/artist"><span>歌手</span></Link>
						</li>
						<li className = "topBarItem">
							<Link to = "/discover/album" ><span>新碟上架</span></Link>
						</li>
					</ul>
				</div>
				<div className="topBarSearch">
					{/* <span className="searchIcon">
                    </span> */}
					<input />
				</div>
				{/* <div className = "topBar_creater" >
					<Link to="/creater">
						{ "创作者中心" }
					</Link>
				</div>	 */}
				<div className = "topBar_login">
					<Button type="danger" shape="round">
						登录
					</Button>
					<div style={{zIndex: 99}}>
						<span onClick={()=> {handlePhone(); } } > 
							手机号登录
						</span>
						<span onClick={()=> {message.error("让你不用点我，你非要点")}}>
							邮箱登录(敬请期待) 
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
				type: "loginDefault"
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