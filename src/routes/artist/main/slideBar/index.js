import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.less";

class SlideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tag: {
				"华语": ["华语男歌手", "华语女歌手", "华语组合/乐队"],
				"欧美": ["欧美男歌手", "欧美女歌手", "欧美组合/乐队"],
				"日本": ["日本男歌手", "日本女歌手", "日本组合/乐队"],
				"韩国": ["韩国男歌手", "韩国女歌手", "韩国组合/乐队"],
				"其他": ["其他男歌手", "其他女歌手", "其他组合/乐队"],
			},
		};
	}
	render() {
	  const { tag } = this.state;
		const { getArtists } = this.props;
		let cat = (decodeURI(this.props.location.search)).split("?")[1] || "推荐歌手";

		return (
			<div className="artist-slide">
				<h3 className="tit">推荐</h3>
				<ul className="artist-slide-nav">
					<li
						className={"flag"}
					>
						<Link to="/discover/artist?推荐歌手" className={cat === "推荐歌手" ? "active" : ""}>推荐歌手</Link>
					</li>
					<li
						className="flag"
						onClick={() => getArtists(100, "入驻歌手", 0)}
					>
						<Link to="/discover/artist?入驻歌手" className={cat === "入驻歌手" ? "active" : ""}>入驻歌手</Link>
					</li>
				</ul>
				{
					Object.keys(tag).map(item => {
						return (
							<div className="blk" key={item}>
								<h3 className="tit">{item}</h3>
								<ul className="artist-slide-nav">
									{
										tag[item].map(item => {
											return (
												<li onClick={() => getArtists(100, item, 0, "a")} className={"flag"}>
													<Link to={`/discover/artist?${item}`} className={cat === item ? "active" : ""}>{item}</Link>
												</li>
											);
										})
									}
								</ul>
							</div>
						);
					})
				}

			</div>
		);
	}
}

SlideBar.propTypes = {
	getArtists: PropTypes.func,
};

export default withRouter(SlideBar);