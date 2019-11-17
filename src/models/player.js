import * as songService from "../services/song";

export default {
	namespace: "player",
	state: {
		// 当前播放列表
		songList: [],
		// 当前播放歌曲
		currentSong: {},
		// 当前页面的歌曲信息
		curPageSongs: [],

	},
	reducers: {
		"add-songs"(state, { payload }) {
			return { ...state, ...payload };
		},
		"set-curSong"(state, { payload }) {
			let _songList = [...state.songList];
			if (_songList.length === 0 || !_songList.some(item => payload.currentSong.id === item.id)) {
				_songList.push(payload.currentSong);
			}
			return { ...state, ...payload, songList: _songList};
		}
	},
	effects: {

		*getSongsUrl({ payload }, { put, call }) {
			const res = yield call(songService.getSong, payload);
			if (res.code === 200) {
				yield put({
					type: "add-songs",
					payload: {
						curPageSongs: res.data
					}
				});
			}
		},
		*setCurSong({ payload }, { put, call }) {
			const res = yield call(songService.getSong, payload);
			if (res.code === 200) {
				let currentSong;
				if (Array.isArray(res.data)) {
					currentSong = res.data[0]; 
				} else {
					currentSong = res.data;
				}
				yield put({
					type: "set-curSong",
					payload: {
						currentSong
					}
				});
			}
		}
	}
};