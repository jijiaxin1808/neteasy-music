import { Link } from "react-router-dom";
import { Data } from "../../../assets/TopData";
import React from "react";
import "./index.less";

class TopBar extends React.Component {
	render() {
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
					<div> </div>
				</div> 	
				


			</div>
		);
	}
}
export default TopBar;