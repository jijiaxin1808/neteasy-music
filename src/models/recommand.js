import * as songlistService from "../services/songlist";
import * as toplistService from "../services/toplist";
import * as albumService from "../services/album";
import * as topartistsService from "../services/topartists";
import * as utils from "../utils/utils";

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
		},
		"add-rec-topartists"(state, { payload }) {
		    return {
		        ...state,
				topartists: payload.topartists,
			};
		}
	},
	effects: {
		*getSongs({ payload }, { call, put }) {

			let temp = yield call(songlistService.getSongList, payload);

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

			let temp = yield call(albumService.getAlbum, payload);

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
			let rectoplists = [];

			if(payload.idxArr) {
				Arr = yield payload.idxArr.map((item) => {
		            return call(toplistService.getTopList, item);
				});
			}

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
		*getTopArtists({ payload }, { call, put }) {

		    let temp = yield call(topartistsService.getTopArtists, payload);
		    let topArti = [];
		    if(temp.code === 200) {
		        temp.artists.forEach((item, index) => {
					topArti[index] = utils.sliceObj(item, ["img1v1Url", "name"]);
				});

		        yield put({
					type: "add-rec-topartists",
					payload: {
						topartists: topArti,
					},
				});
			}
		}
	},
};





