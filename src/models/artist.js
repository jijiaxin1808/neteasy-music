import * as artistService from "../services/artists";
import * as utils from "../utils/utils";

export default {
    
	namespace: "Artist",
	state: {

	},
	reducers: {

	},
	effects: {
		*getArtists({ payload }, { call, put }) {

			let temp = yield call(artistService.getArtistList, payload);
			console.log(temp);
			let artists = [];
			if(temp.code === 200) {
				temp.artists.forEach((item, index) => {
					artists[index] = utils.sliceObj(item, ["img1v1Url", "name"]);
				});
				console.log(artists)
			}
		}
	}
};