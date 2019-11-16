import * as artistService from "../services/artists";
import * as topArtistService from "../services/topartists";
import * as utils from "../utils/utils";

export default {
    
	namespace: "Artist",
	state: {

	},
	reducers: {
		"add-artists"(state, { payload }) {
			return {
				...state,
				artists: payload.artists,
			};
		},
		"change-letter-flag"(state, { payload }) {
			return {
				...state,
				letterBarFlag: payload.initial,
			};
		},
		"add-more-artists"(state, { payload }) {
		    return {
		        ...state,
				artists: payload.artists,
			};
		},
	},
	effects: {
		*getArtists({ payload }, { call, put }) {

			let temp = yield (() => {
			    if(payload.tag) {
			        return call(artistService.getArtistList, payload);
				} else {
			        return call(topArtistService.getTopArtists, payload);
				}
			})();
			console.log(temp)
			let artists = [];
			if(temp.code === 200) {
				temp.artists.forEach((item, index) => {
					artists[index] = utils.sliceObj(item, ["img1v1Url", "name", "id"]);
				});
				yield put({
					type: "add-artists",
					payload: {
					    artists,
					}
				});
			}
		},
		*getMoreArtists({ payload }, { call, put }) {

			let temp = yield call(artistService.getArtistList, payload);
		    let artists = [...payload.artists];
			if(temp.code === 200) {
				temp.artists.forEach((item, index) => {
					artists[index] = utils.sliceObj(item, ["img1v1Url", "name", "id"]);
				});
				yield put({
					type: "add-more-artists",
					payload: {
						artists,
					}
				});
			}
		},
	}
};