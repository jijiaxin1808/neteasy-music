import React from "react";
import "./header.less";
import Logo from "./Logo";
import TopBar from "./topBar";
import Login from "../Login";
import "./icon.less";
import SubBar from "./subBar";

class Header extends React.Component {
	
	render() {
		const url = window.location.hash;
		console.log( url,"aaa" );
		return (
			<div>

				<div className="header"> 
					<div>
						<Logo />
						<TopBar /> 
						<Login  />
					</div>
				</div>
				<SubBar />
			</div>
		);
	}



}
export default Header;