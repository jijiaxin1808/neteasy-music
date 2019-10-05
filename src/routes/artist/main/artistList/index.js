import React from "react";
import { NavLink } from "react-router-dom";
import "./index.less";

class ArtistList extends React.Component {

	render() {
		const { artists, cat } = this.props;

		return (
			(cat !== "推荐歌手" && cat !== "入驻歌手") &&
            (<ul className="artists-sml">
            	{
            		artists.slice(10).map(item => {
            			return (
            				<li className="artists-sml-item">
            					<NavLink to="/" className="artist-sml-name">{item.name}</NavLink>
            					<a><i className="icon-perPage">个人主页</i></a>
            				</li>
            			);
            		})
            	}
            </ul>)

		);
	}
}

export default ArtistList;