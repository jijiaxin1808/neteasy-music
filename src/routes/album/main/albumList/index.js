import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.less";

class AlbumList extends React.Component {

	render() {
	    const { hotAlbum=[], allAlbum=[] } = this.props;
	    let album = (hotAlbum.length !== 0) ? hotAlbum : allAlbum;
		return (
			<ul className="hot-album-list">
				{
					album.map(item => {

						return (
							<li className="hot-album-item u-cover-alb1">
								<NavLink to="/" className="hot-album-name">
									<img src={`${item.picUrl}?param=130y130`} alt={item.name} />
									<div className="mask" />
									<i className="icon-play" />
								</NavLink>
								<p className="dec">
									<NavLink to="/" className="album-name"><i>{item.name}</i></NavLink>
									<NavLink to="/" className="album-artist">{item.artist}</NavLink>
								</p>
							</li>
						);
					})
				}
			</ul>
		);
	}
}
AlbumList.propTypes = {
	hotAlbum: PropTypes.array,
	allAlbum: PropTypes.array,
};
export default AlbumList;