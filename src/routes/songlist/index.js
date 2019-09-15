import React from "react";
import { connect } from "dva";

import TagList from "./taglist";
import SongListInner from "../../components/songlist";
import Pagination from "../../components/pagination";
import "./index.less";

class SongList extends React.Component {

	render() {

		let tag = (decodeURI(this.props.location.search)).split("?")[1];

		const {
			showTagList,
			hot = true,
		} =this.props;

		const {
			ChangeTagState,
			handleSelectClick,
		} = this.props;

		ChangeTagState(tag);//

		return (
			<div className="wrap">
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
						<SongListInner />
					</div>
				</div>
				<Pagination />
			</div>
		);
	}
	componentDidMount() {

		const {
			getTagList,
			getSongList,
			curTag,
			curPage,
		} = this.props;

		getTagList();
		getSongList(curTag, curPage);
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
	getSongList(tag, curPage) {

		dispatch({
			type: "SongList/getSongs",
			payload: {
				tag,
				curPage,
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
