import React from "react";
import { connect } from "dva";
import classnames from "classnames";
import SlideBar from "./main/slideBar";
import TopArtistList from "./main/TopArtistList";
import ArtistList from "./main/artistList";
import "./index.less";

class Artist extends React.Component {

	getLetter() {
		let letterArr = [];
		for(let i = 0 ; i <= 25 ; i++) {
			letterArr.push(String.fromCharCode((65+i)).toLocaleUpperCase());
		}
		return letterArr;
	}

	render() {
	    const { artists, getArtists, letterBarFlag = "热门", getHotArtists } = this.props;
		let cat = (decodeURI(this.props.location.search)).split("?")[1];
		return (
			<div className="artist-list">
				<SlideBar getArtists={getArtists}/>
				<div className="content">
					<div className="tit">
						<span className="artist-tag">{cat}</span>
					</div>
					{
						(cat !== "推荐歌手" && cat !== "入驻歌手") && (
							<div className="artist-name-nav">
								<ul>
									<li
										className={classnames({
											artistHot: true,
											active: letterBarFlag === "热门",
										})}
										onClick={() => getHotArtists(100, 0, "热门")}
									>
										<a>热门</a>
									</li>
									{
										this.getLetter().map(item => {
											return (
												<li
													className={classnames({
														active: letterBarFlag === `${item.toLocaleLowerCase()}`,
													})}
													onClick={() => getArtists(100, cat, 0, item.toLocaleLowerCase())}
												>
													<a>{item}</a>
												</li>
											);
										})
									}
									<li
										className={classnames({
											artistOther: true,
											active: letterBarFlag === "其它",
										})}
										onClick={() => getArtists(100, cat, 0, "其它")}
									>
										<a>其它</a>
									</li>
								</ul>
							</div>
						)
					}
					<TopArtistList artists={artists} cat={cat}/>
					<ArtistList artists={artists} cat={cat}/>
				</div>
			</div>
		);
	}
	componentDidMount() {

		const { getHotArtists, getMoreArtists, artists } = this.props;
		let cat = (decodeURI(this.props.location.search)).split("?")[1];
		if(cat === "入驻歌手" || cat === "推荐歌手") {
			window.onscroll = () => {
			    let sT = document.documentElement.scrollTop;
				console.log(sT);
			    if(sT >= 1600) {
			        console.log("adfas");
			        document.documentElement.scrollTop = 1000;
				}
			};
		}
		getHotArtists(100, 0);
	}
	componentWillUnmount() {
	    window.onscroll = null;
	}
}

const mapDispatch = (dispatch) => ({
	getArtists(limit, tag, offset, initial) {

		dispatch({
			type: "Artist/getArtists",
			payload: {
				limit,
				tag,
				offset,
				initial,
			},
		});
		dispatch({
			type: "Artist/change-letter-flag",
			payload: {
				initial,
			},
		});
	},
	getHotArtists(limit, offset, initial) {
	    dispatch({
			type: "Artist/getArtists",
			payload: {
				limit,
				offset,
			}
		});
		dispatch({
			type: "Artist/change-letter-flag",
			payload: {
				initial,
			},
		});
	},
	getMoreArtists(limit, offset, cat, artists) {
	    dispatch({
			type: "Artist/getArtists",
			payload: {
			    limit,
			    offset,
				cat,
				artists,
			}
		});
	}
});

export default connect(({ Artist }) => ({
	artists: Artist.artists,
	letterBarFlag: Artist.letterBarFlag,
	showLetterBar: Artist.showLetterBar,
}), mapDispatch)(Artist);