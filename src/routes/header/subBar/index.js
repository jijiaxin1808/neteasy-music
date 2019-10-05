import React from "react";
import "./index.less";
import { NavLink, withRouter } from "react-router-dom";
//不知道为什么没有withRouter-HOC，就一直报错。

class SubBar extends React.Component {


	render() {
		const url = window.location.hash.split("/")[2]?window.location.hash.split("/")[2]:"";
		console.log("当前路由为",url);
		const playlistreg = /playlist\w*/ig;
		const toplistreg = /toplist\w*/ig;
		const djradioreg = /djradio\w*/ig;
		const albumreg = /album\w*/ig;
		const artistreg = /artist\w*/ig;
		return (
			<div className = "subBar">
				<ul className = "subBar-ul">
					<li className = "subbar-link">
						<NavLink to = "/discover/recommand"  ><span className = { url==="recommand" || url===""  ?"subBar-hover":"" }>推荐</span></NavLink>
					</li>
					<li className = "subbar-link">
						<NavLink to = "/discover/toplist"  ><span className = { toplistreg.test(url)?"subBar-hover":"" }>排行榜</span></NavLink>
					</li>
					<li className = "subbar-link">
						<NavLink to = "/discover/playlist"   ><span className = { playlistreg.test(url)?"subBar-hover":"" }>歌单</span></NavLink>
					</li>
					<li className = "subbar-link">
						<NavLink to = "/discover/djradio"  ><span className = { djradioreg.test(url)?"subBar-hover":"" }>主播电台</span></NavLink>
					</li>
					<li className = "subbar-link">
						<NavLink to = "/discover/artist"  ><span className = { artistreg.test(url)?"subBar-hover":"" }>歌手</span></NavLink>
					</li>
					<li className = "subbar-link">
						<NavLink to = "/discover/album"   ><span className = { albumreg.test(url)?"subBar-hover":"" }>新碟上架</span></NavLink>
					</li>
				</ul>
			</div>
		);
	}
}
export default withRouter(SubBar);