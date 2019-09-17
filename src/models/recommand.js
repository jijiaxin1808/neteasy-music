import * as songlistService from "../services/songlist";
import * as toplistService from "../services/toplist";
import * as albumService from "../services/album";

export default {

	namespace: "Recommand",
	state: {

	},
	reducers: {
		"add-rec-songs"(state, { payload }) {

			return {
				...state,
				recplaylists: payload.recplaylists,
			};
		},
		"add-rec-top"(state, { payload }) {

		  return {
		    ...state,
				rectoplists: payload.rectoplists,
			};
		},
		"add-rec-album"(state, { payload }) {

		  return {
		    ...state,
				recalbums: payload.recalbums,
			};
		}
	},
	effects: {
		*getSongs({ payload }, { call, put }) {

			const temp = yield call(songlistService.getSongList, payload.tag, payload.curPage, 8);

			if(temp.code === 200) {

				yield put({
					type: "add-rec-songs",
					payload: {
						recplaylists: temp.playlists,
					},
				});
			}
		},
		*getAlbum({ payload }, { call, put }) {
			const temp = yield call(albumService.getAlbum, payload.offset, payload.limit);

			if(temp.code === 200) {

			  yield put({
					type: "add-rec-album",
					payload: {
						recalbums: temp.albums,
					},
				});
			}
		},
		*getTopList({ payload }, { call, put }) {

			let Arr = [];

			if(payload.idxArr) {

				Arr = yield payload.idxArr.map((item) => {
		      return call(toplistService.getTopList, item);
				});
			}

			let rectoplists = [];

			for(let i = 0 ; i < Arr.length ; i ++) {

			  if(Arr[i].code === 200) {

			    const temp = [].concat(Arr[i].playlist.tracks.slice(0, 10).map(item => {
			      return item.name;
					}));
			    rectoplists = [...rectoplists, ...temp];
				};
			};

			yield put({
				type: "add-rec-top",
				payload: {
					rectoplists,
				},
			});
		},

	},
};
