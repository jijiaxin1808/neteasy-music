import React from "react";
import { NavLink } from "react-router-dom";
import "./index.less";

class TopArtistList extends React.Component {

	render() {

		const { artists, cat } = this.props;
		let index = (cat !== "推荐歌手" && cat !== "入驻歌手") ? 10 : artists.length;
		console.log(index)
		return (
			<ul className="artists-top">
				{
					artists.slice(0, index).map( item => {
						return(
							<li className="artists-top-item" key={item}>
								<NavLink to="/" className="artist-top-name">
									<img src={`${item.img1v1Url}?param=130y130` } alt = { item.coverImgUrl } />
									<div className="mask" />
								</NavLink>
								<p className="dec">
									<NavLink to="/">{item.name}</NavLink>
									<a><i className="icon-perPage">个人主页</i></a>
								</p>
							</li>
						);
					})
				}
			</ul>
		);
	}
}

export default TopArtistList;