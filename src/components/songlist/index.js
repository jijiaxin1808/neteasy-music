import React from "react";
import { connect } from "dva";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.less";

class SongListInner extends React.Component {

	render() {

		const {
			playlists,
		} = this.props;


		return (

			<div className="songlist-content">
				<ul className="songlists">
					{
						playlists && playlists.map((item, index) => {

							return(
								<li className="songlists-item">
									<Link to="/">
										<img src={`${item.coverImgUrl}` + "?param=140y140"} />
										<div className="mask" />
										<div className="bottom">
											<i className="ico-listen" />
											<span className="num-listen">16844</span>
											<Link to="/" className="ico-play" />
										</div>
									</Link>
									<p className="dec">
										<Link to="/">{item.name}</Link>
									</p>
									<p>by
										<Link to="/">{item.creator.signature || item.creator.nickname}</Link>
										<sub className="ico-v" />
									</p>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

SongListInner.PropTypes = {
	playlists: PropTypes.array.isRequired,
};

export default SongListInner;
