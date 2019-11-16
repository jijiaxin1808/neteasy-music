import React from "react";
import "./index.less";
import { Link, withRouter } from "react-router-dom";
//不知道为什么没有withRouter-HOC，就一直报错。

class SubBar extends React.Component {


	render() {
		const url = window.location.hash.split("/")[2]?window.location.hash.split("/")[2]:"";

		return (
			<div className = "subBar">
				<ul className = "subBar-ul">
					<li className = "subbar-link">
						<Link to = "/discover/recommand"  ><span className = { url==="recommand"?"subBar-hover":"" }>推荐</span></Link>
					</li>
					<li className = "subbar-link">
						<Link to = "/discover/toplist"  ><span className = { url==="toplist"?"subBar-hover":"" }>排行榜</span></Link>
					</li>
					<li className = "subbar-link">
						<Link to = "/discover/playlist"   ><span className = { url==="playlist"?"subBar-hover":"" }>歌单</span></Link>
					</li>
					<li className = "subbar-link">
						<Link to = "/discover/djradio"  ><span className = { url==="djradio"?"subBar-hover":"" }>主播电台</span></Link>
					</li>
					<li className = "subbar-link">
						<Link to = "/discover/artist"  ><span className = { url==="artist"?"subBar-hover":"" }>歌手</span></Link>
					</li>
					<li className = "subbar-link">
						<Link to = "/discover/album"   ><span className = { url==="album"?"subBar-hover":"" }>新碟上架</span></Link>
					</li>
				</ul>
			</div>
		);
	}
}
export default withRouter(SubBar);