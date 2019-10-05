import { Link } from "react-router-dom";
import { Data } from "../../assets/TopData";
import React from "react";
import "./index.less";

class TopBar extends React.Component {
	render() {
		return (
			<div>
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
					<span className="searchIcon">
					</span>
					<input />
				</div>
			</div>
		);
	}
}
export default TopBar;