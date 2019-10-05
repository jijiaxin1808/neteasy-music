import React, { useState, useEffect } from "react";
import { connect } from "dva";
import LayoutOne from "../../components/detail/layout/layout1";
import PicList from "../../components/picList";
import RecList from "../../components/recList";
import SongList from "../../components/songlist2";
import Info from "./Info";
import "./index.less";

function SongListDetail(props) {

	const renderSongListImg = () => {
		return (
			<img src="http://p3.music.126.net/v0guOXrzl3Wn24GLi-B-nw==/109951164389512106.jpg?param=200y200" alt="img"/>
		);
	};
	const { details, subscribers, recSongList, getSubecriber, getRecList, getSongListDetail } = props;
	let arrAll = JSON.stringify(details) !== "{}" && subscribers.length !== 0 && recSongList.length !== 0;
	useEffect(() => {
		getSongListDetail(2875784937);
		getSubecriber(544215255, 8);
		getRecList(324231);
	}, []); 

	return (
		<LayoutOne renderImg={renderSongListImg}>

			{
				{
					sliderData: {
						tags: ["喜欢这个歌单的人", "相关推荐"],
					},
					renderPicList: () => {
						if(arrAll)
							return (
								<PicList picList={subscribers}/>
							);
					},
					renderRecList: () => {
						if(arrAll)
							return (
								<RecList recList={recSongList} />
							);
					},
					renderInfo: () => {

						if(arrAll) {
							return (
								<Info details={details} />
							);
						}
					},
					renderShowList: () => {
						if(arrAll) {
							return (
								<SongList list={details.playlist.tracks} listData={listData}/>
							);
						}
					}
				}
			}
		</LayoutOne>
	);
}

const listData = [
	{
		width: "74px",
		title: "",		
	},
	{
		width: "auto",
		title: "歌曲标题",
	},
	{
		width: "111px",
		title: "时长",
	},
	{
		width: "14%",
		title: "歌手",
	},
	{
		width: "20%",
		title: "专辑",
	}
];

const mapDispatch = (dispatch) => ({
	/*喜欢这个歌单的人*/
	getSubecriber(id, limit) {
		dispatch({
			type: "SongListDetail/getSubecriber",
			payload: {
				id,
				limit,
			}
		});
	},
	/*热门歌单*/
	getRecList(id) {
		dispatch({
			type: "SongListDetail/getRecSongList",
			payload: {
				id,
			},
		});
	},
	getSongListDetail(id) {
		dispatch({
			type: "SongListDetail/getSongListDetail",
			payload: {
				id,
			},
		});
	}
});
export default connect(({SongListDetail}) => ({
	songs: SongListDetail.songs,
	subscribers: SongListDetail.subscribers,
	recSongList: SongListDetail.recSongList,
	details: SongListDetail.details,
}), mapDispatch)(SongListDetail);