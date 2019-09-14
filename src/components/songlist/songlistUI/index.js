import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "dva";
import { NavLink } from "dva/router";
import TagList from "../../taglist";
import "./index.less";

const SongListInner = ({
	flag = "全部",
	hot = true,
	showTagList,
	songlists,
	handleSelectClick,
}) => {

	return(

		<div className="songlist-inner">
			<div className="songlist-title">
				<h3 className="flag">
					<span>{flag}</span>
					<a
						className="flag-select"
						onClick={handleSelectClick}
					>
						<i>
                                      选择分类
							<em className="ico"></em>
						</i>
						{ showTagList && <TagList /> }
					</a>
				</h3>
				{ hot && <a className="songlist-hot">热门</a> }
			</div>
			<div className="songlist-content">
				<ul className="songlists">

					<li className="songlists-item">
						<NavLink to="/">
							<img src="http://p2.music.126.net/2ojDK0IWAPEtV_oI_xRpUg==/109951164358567415.jpg?param=140y140" />
							<div className="mask"></div>
							<div className="bottom">
								<i className="ico-listen"></i>
								<span className="num-listen">16844</span>
								<NavLink to="/" className="ico-play"></NavLink>
							</div>
						</NavLink>
						<p className="dec">
							<NavLink to="/">听歌思人 | 所幸还能与你共伫同一片月光下</NavLink>
						</p>
						<p>by
							<NavLink to="/">网易云音乐</NavLink>
							<sub className="ico-v"></sub>
						</p>
					</li>

				</ul>
			</div>
		</div>
	);
};





SongListInner.PropTypes = {
	tags: PropTypes.array.isRequired,
	songlists: PropTypes.array.isRequired,
	categories: PropTypes.array.isRequired,
};

const mapDispatch = (dispatch) => ({

	handleSelectClick() {
		dispatch({
			type: "SongList/toggle-select-click"
		});
	},
});

export default connect(({ SongList }) => ({

	showTagList: SongList.showTagList,

}), mapDispatch)(SongListInner);
