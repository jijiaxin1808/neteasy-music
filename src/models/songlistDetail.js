import * as subscriberService from "../services/subscriber";
import * as recService from "../services/recList";
import * as songListDetailService from "../services/songlist";
import * as utils from "../utils/utils";

export default {
	namespace: "SongListDetail",
	state: {},
	reducers: {
		"add-subscribers"(state, { payload }) {
			return {
				...state,
				subscribers: payload.subscribers,
			};
		},
		"add-recSongList"(state, { payload }) {
			return {
				...state,
				recSongList: payload.recSongList,
			};
		},
		"add-details"(state, { payload }) {
			return {
				...state,
				details: payload.details
			};
		}
	},
	effects: {
		*getSubecriber({ payload }, { call, put }) {

			let temp = yield call(subscriberService.getSubscriber, payload),
				subscribers = [];

			if(temp.code === 200) {
				subscribers = subscribers.concat(temp.subscribers.map(item => {
					return utils.sliceObj(item, ["avatarUrl"]);
				}));
				yield put({
					type: "add-subscribers",
					payload: {
						subscribers,
					},
				});
			}
		},
		*getRecSongList({ payload }, { call, put }) {

			let temp = yield call(recService.getRecList, payload),
				recSongList = [];

			if(temp.code === 200) {
				recSongList = temp.playlists;
				yield put({
					type: "add-recSongList",
					payload: {
						recSongList
					},
				});
			}
		},
		*getSongListDetail({ payload }, { call, put }) {

			let temp = yield call(songListDetailService.getSongListDetail, payload),
				details = {};

			if(temp.code === 200) {
				details = temp;
				yield put({
					type: "add-details",
					payload: {
						details
					}
				});
			}
		}
	}
};
