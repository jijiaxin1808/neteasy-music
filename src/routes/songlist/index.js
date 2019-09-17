import React from "react";
import { connect } from "dva";

import TagList from "./taglist";
import SongListInner from "../../components/songlist";
import Pagination from "../../components/pagination";
import "./index.less";

class SongList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tag: "全部",
		};
	}
	render() {

		let tag = (decodeURI(this.props.location.search)).split("?")[1] || "全部";

		const {
			showTagList,
			playlists,
			hot = true,
		} =this.props;

		const {
			handleSelectClick,
		} = this.props;


		return (
			<div className="songlists-wrap">
				<div>
					<div className="songlist-inner">
						<div className="songlist-title">
							<h3 className="flag">
								<span>{tag}</span>
								<a
									className="flag-select"
									onClick={handleSelectClick}
								>
									<i>
                    选择分类
										<em className="ico" />
									</i>
									{ showTagList && <TagList tag={tag} /> }
								</a>
							</h3>
							{ hot && <a className="songlist-hot">热门</a> }
						</div>
						<SongListInner
							playlists={playlists}
						/>
					</div>
				</div>
				<Pagination limit={35}/>
				{/*	limit */}
			</div>
		);
	}
	componentDidMount() {

		let tag = (decodeURI(this.props.location.search)).split("?")[1] || "全部";

		const {
			curPage,
			getTagList,
			getSongList,
			ChangeTagState,
		} = this.props;

		ChangeTagState(tag);
		getTagList();
		getSongList(tag, curPage, 35);
	}
}


const mapDispatch = (dispatch) => ({

	handleSelectClick() {
		dispatch({
			type: "SongList/toggle-select-click"
		});
	},
	getTagList() {
		dispatch({
			type: "SongList/getTags",
		});
	},
	getSongList(tag, curPage, limit) {

		dispatch({
			type: "SongList/getSongs",
			payload: {
				tag,
				curPage,
				limit,
			},
		});
	},

	ChangeTagState(tag) {
		dispatch({
			type: "SongList/change-cur-tag",
			payload: {
				tag
			}
		});
	},
});

export default connect(({ SongList }) => ({
	categories: SongList.categories,
	sub: SongList.sub,
	playlists: SongList.playlists,
	curPage: SongList.curPage,
	showTagList: SongList.showTagList,
	curTag: SongList.curTag,
}), mapDispatch)(SongList);
