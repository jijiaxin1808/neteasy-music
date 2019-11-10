import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.less";

const Size = {
	big: {
		img: "130",
		li: "151px",
		margin: "34px",
		background: "0 -844px",
	},
	mid: {
		img: "120",
		li: "145px",
		margin: "15px",
		background: "-170px -850px",
	}
}

class AlbumList extends React.Component {

	render() {

		const { hotAlbum=[], allAlbum=[], size="big" } = this.props;
		let album = (hotAlbum.length !== 0) ? hotAlbum : allAlbum;

			return (
				<ul className="hot-album-list" style={{marginLeft: `-${Size[size].margin}`}}>
					{
						album.map(item => (

							<li className="hot-album-item u-cover-alb1" style={{marginLeft: Size[size].margin, width: Size[size].li}}>
								<Link to={`/album?${item.id}`} className="hot-album-name">
									<img src={`${item.picUrl}?param=${Size[size].img}y${Size[size].img}`} alt={item.name}/>
									<div className="mask" style={{backgroundPosition: Size[size].background}}/>
									<i className="icon-play"/>
								</Link>
								<p className="dec">
									<Link to="/" className="album-name"><i>{item.name}</i></Link>
									<Link to="/" className="album-artist">{typeof item.artist === "object" ? item.artist.name : item.artist}</Link>
								</p>
							</li>
						))
					}
				</ul>
			) 

	}
}

AlbumList.propTypes = {
	hotAlbum: PropTypes.array,
	allAlbum: PropTypes.array,
};

export default AlbumList;