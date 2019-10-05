import * as albumService from "../services/album";
import * as utils from "../utils/utils";

export default {
	namespace: "Album",
	state: {},
	reducers: {
		"add-hotAlbum"(state, { payload }) {
			return {
				...state,
				hotAlbum: payload.hotAlbum
			};
		},
		"add-album"(state, { payload }) {
			return {
				...state,
				allAlbum: payload.allAlbum
			};
		}
	},
	effects: {
		*getHotAlbum({ payload }, { call, put }) {
			let temp = yield call(albumService.getHotAlbum),
				hotAlbum = [];

			if (temp.code === 200) {
				hotAlbum = hotAlbum.concat(temp.albums.slice(0, 10));
				hotAlbum.forEach((item, index, arr) => {
					arr[index] = {
						...utils.sliceObj(item, ["name", "picUrl"]),
						artist: utils.sliceObj(item.artist, ["name"])["name"]
					};
				});
				yield put({
					type: "add-hotAlbum",
					payload: {
						hotAlbum
					}
				});
			}
		},
		*getAlbum({ payload }, { call, put }) {
			//待和上面getHotAlbum合并

			let temp = yield call(albumService.getAlbum, payload),
				allAlbum = [];

			if (temp.code === 200) {
				allAlbum = allAlbum.concat(temp.albums);
				allAlbum.forEach((item, index, arr) => {
					arr[index] = {
						...utils.sliceObj(item, ["name", "picUrl"]),
						artist: utils.sliceObj(item.artist, ["name"])["name"]
					};
				});
				yield put({
					type: "add-album",
					payload: {
						allAlbum,
					}
				});
			}
		}
	}
};
