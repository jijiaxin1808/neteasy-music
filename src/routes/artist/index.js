import React from "react";
import { connect } from "dva";
import SlideBar from "./main/slideBar";
import "./index.less";

class Artist extends React.Component {
	render() {
		return (
			<div className="artist-list">
				<SlideBar />
				<div className="content">
					<div className="tit">
						<span className="artist-tag">华语男歌手</span>
					</div>
                    <div className="artistname-nav">
                        <ul>
                            <li className="artist-hot">
                                <a>热门</a>
                            </li>
                        </ul>
                    </div>
				</div>
			</div>
		);
	}
	componentDidMount() {

		let tag = (decodeURI(this.props.location.search)).split("?")[1] || "推荐歌手";

		const { getArtists, } = this.props;
		getArtists(10, tag, 1);
	}
}

const mapDispatch = (dispatch) => ({
	getArtists(limit, tag, curPage) {
		dispatch({
			type: "Artist/getArtists",
			payload: {
				limit,
				tag,
				curPage,
			},
		});
	}
});

export default connect(({}) => ({}), mapDispatch)(Artist);