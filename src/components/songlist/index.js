import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "dva/router";
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

				         playlists.map( item => {

							return(
								<li className="songlists-item">
									<NavLink to="/">
										<img src={`${item.coverImgUrl}?param=140y140` } alt = { item.coverImgUrl } />
										<div className="mask" />
										<div className="bottom">
											<i className="ico-listen" />
											<span className="num-listen">{`${item.playCount}万`}</span>
											<NavLink to="/" className="ico-play" />
										</div>
									</NavLink>
									<p className="dec">
										<NavLink to="/">{item.name}</NavLink>
									</p>
									<p>by
										<NavLink to="/">{item.creator.signature || item.creator.nickname}</NavLink>
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
