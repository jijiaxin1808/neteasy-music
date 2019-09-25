import React from "react";
import "./header.less";
import Logo from "./Logo";
import TopBar from "./topBar";
import Login from "../Login";
import "./icon.less";
import SubBar from "./subBar";
import ToTop from "../../components/toTop";
import PlayQueue from "../../routes/playBar/playQueue";

class Header extends React.Component {
	
	render() {
		// const url = window.location.hash;
		return (
			<div>

				<div className="header"> 
					<div>
						<Logo />
						<TopBar />
						<Login  />
						<ToTop />
					</div>
				</div>
				<SubBar />
				<PlayQueue />
			</div>
		);
	}
}
export default Header;