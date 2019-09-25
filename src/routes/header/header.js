import React from "react";
import "./header.less";
import Logo from "../../components/Logo";
import TopBar from "../../components/topBar";
import Login from "../../components/Login/index";
import PlayQueue from "../../routes/playBar/playQueue";

class Header extends React.Component {
	render() {
		return (
			<div className="header"> 
				<div>
					<Logo />
					<TopBar /> 
					<Login />
					<PlayQueue />
				</div>
			</div>
		);
	}
}
export default Header;