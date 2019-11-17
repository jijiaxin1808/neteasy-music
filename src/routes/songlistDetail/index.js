import React, { useState, useEffect } from "react";
import { connect } from "dva";
import LayoutOne from "../../components/detail/layout/layout1";
import PicList from "../../components/picList";
import RecList from "../../components/recList";
import SongList from "../../components/songlist2";
import Info from "./Info";
import "./index.less";

function SongListDetail(props) {

	const { details, subscribers, recSongList, getSongsUrl, handlePlay, getSubecriber, getRecList, getSongListDetail } = props;
	let arrAll = JSON.stringify(details) !== "{}";
	let id = props.location.search.substring(1);

	useEffect(() => {
		if(id) {
			getSongListDetail(id);
			getSubecriber(id, 8);
			getRecList(id);
		}
	}, [id]); 
	
	useEffect(() => {
		details.playlist && getSongsUrl(details.playlist.trackIds);
	}, [details]);

	return (
		<LayoutOne>
			{
				{
					sliderData: [
						{
							tag: "喜欢这个歌单的人",
							more: false,
							show: subscribers.length !== 0,
							render: () => {
								if(arrAll)
									return (
										<PicList picList={subscribers}/>
									);
							},
						},
						{
							tag: "相关推荐",
							more: false,
							show: recSongList.length !== 0,
							render: () => {
								if(arrAll)
									return (
										<RecList recList={recSongList} />
									);
							},
						}
					],
					renderImg: () => {
						return (
							<React.Fragment>
								{
									details.playlist &&
									<img style={styles.img} src={`${details.playlist.coverImgUrl}?param=200y200`} alt="img"/>	
								}
								<div style={styles.mask}></div>
							</React.Fragment>
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
						const others = {
							options: {
								album: true, 
								artist: true
							}, 
							showTitle: true,
						} 
						if(arrAll) {
							return (
								<SongList flag="歌单" list={details.playlist} listData={listData} {...others} handlePlay={handlePlay}/>
							);
						}
					}
				}
			}
		</LayoutOne>
	);
}
const styles = {
	img: {

	},
	mask: {
		position: "absolute",
		width: "208px",
		height: "208px",
		backgroundImage: `url(${require("../../assets/coverall.png")})`,
		backgroundPosition: "0 -1285px",
		top: "-4px",
		left: "-4px",
	},
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
	},
	handlePlay(id) {
		// id number

		dispatch({
			type: "player/setCurSong",
			payload: {
				id,
			}
		});
	},
	getSongsUrl(id) {
		// trackIds []
		dispatch({
			type: "player/getSongsUrl",
			payload: {
				id
			}
		});
	}
});
export default connect(({SongListDetail}) => ({
	songs: SongListDetail.songs,
	subscribers: SongListDetail.subscribers,
	recSongList: SongListDetail.recSongList,
	details: SongListDetail.details,
}), mapDispatch)(SongListDetail);