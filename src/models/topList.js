import * as topListService from "../services/toplist";
import { message } from "antd";

export default {
	namespace:"toplist",
	state:{
		data:[],
		tracks:[],
		listInfo:{}
	},
	reducers: {
		init( state,action ) {
			return {
				...state,...action.payload
			};
		},
	},
	effects:{
		* getToplistDetail( action , { call,put } ) {
			const res = yield call(topListService.getToplistDetail);
			console.log("9999");
			if (res.code ===200 ) {
				yield put({
					type:"init",
					payload:{
						data:res.list
					}
				});
			}
			else {
				message.error(res.message);
			}
		},
		* getToplist( { payload } , { call,put } ) {
			const res = yield call(topListService.getTopList,payload);
			console.log(res);
			if (res.code ===200 ) {
				yield put({
					type:"init",
					payload:{
						tracks:res.playlist.tracks
					}
				});
				yield put({
					type:"init",
					payload:{
						listInfo:{
							playCount: res.playlist.playCount,
							shareCount: res.playlist.shareCount,
							subscribedCount: res.playlist.subscribedCount,
							trackCount: res.playlist.trackCount,
							commentCount: res.playlist.commentCount,
							name: res.playlist.name,
							coverImgUrl: res.playlist.coverImgUrl
						}
					}
				});
			}
			else {
				message.error(res.message);
			}
		},
		* getToplistComment( action , { call,put } ) {
			const res = yield call(topListService.getToplistComment);
			console.log(res,"comment");
			if (res.code ===200 ) {
				yield put({
					type:"init",
					payload:{
						comment:res.hotComments
					}
				});
			}
			else {
				message.error(res.message);
			}
			console.log("77777");

		},


	}

};