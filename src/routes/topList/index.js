import React from "react";
import "./index.less";
import TopListBar from "../../components/topListBar";
import SongListRank from "../../components/songListRank";
import { connect } from "dva";
import HandleMusic from "../../components/handleMusic"; 
import Comment from "../../components/comment";

class TopList extends React.Component {
	componentDidMount() {
		this.props.init();
		document.onscroll = (e)=> {
			console.log("111");	

		};

	}



	render() {
		const { toplist } = this.props;
		return (
			<div className = "topList">
				<div className = "topList-leftBar">
					<TopListBar title = "云音乐特色榜" topListData = { toplist.data  }  isoffical = { false } />
					<TopListBar title = "全球媒体榜" topListData = { toplist.data }  isoffical = { true } />
				</div>
				<div className = "topList-rightBar">
					<HandleMusic data = { toplist.listInfo } />
					<SongListRank data = { toplist.tracks } Info = { toplist.listInfo } />
					<Comment data1 = { toplist.comment }  className = "comment toplist-comment" />
				</div>

				
			</div>
		);
	}
}
const mapDispatchToProps = ( dispatch )=> ({
	init() {
		dispatch({
			type:"toplist/getToplistDetail"
		});
		dispatch({
			type:"toplist/getToplist"
		});
		dispatch({
			type:"toplist/getToplistComment"
		});
	}
});

export default connect(({toplist})=>({toplist}),mapDispatchToProps)(TopList);